import React, { useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [index,setIndex]=useState(0)
  const bottom = useRef(null);


  useEffect(() => {
    async function fetchInitialData() {
      const res = await fetch(`https://medicine-api-nrdd.onrender.com/medicine-data`);
      const data = await res.json();
      setPosts(data);
    }
    fetchInitialData();
  }, []);

  const addMoreData=async()=>{
    setLoading(true);
    const res = await fetch(`https://medicine-api-nrdd.onrender.com/medicine-data?limit=${7}&skip=${index}`);
    const data = await res.json();
    setPosts((prevPosts) => [...prevPosts, ...data]);
    setIndex((prev)=>prev+7)
    setLoading(false);
    setShowLoading(false);
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        addMoreData();
      }
    });
    if(bottom.current){
      observer.observe(bottom.current);
    }
    

    
  }, []);

  return (
    <div className="infinite-scroll-container">
      <ul>
        {posts.map((post) => (
          <>
          <p>{post.id}</p>
          <p>{post.name}</p>
          <p>{post["price(₹)"]}</p>
          <br/>
          </>
        ))}
      </ul>
      {loading && (
        <div
          className={showLoading ? "loading" : ""}
          style={{ opacity: showLoading ? 1 : 0 }}
        >
          Loading...
        </div>
      )}
      <div ref={bottom} />
    </div>
  );
}

export default App;

