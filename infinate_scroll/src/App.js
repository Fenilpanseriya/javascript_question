import React, { useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(0);
  const bottom = useRef(null);

  useEffect(() => {
    async function fetchInitialData() {
      const res = await fetch(`https://medicine-api-nrdd.onrender.com/medicine-data`);
      const data = await res.json();

      setPosts(data);
      setIndex(data.length);
    }
    fetchInitialData();
  }, []);

  const addMoreData = async () => {
    setLoading(true);
    const res = await fetch(`https://medicine-api-nrdd.onrender.com/medicine-data?limit=7&skip=${index}`);
    const data = await res.json();
    let uniqueData=new Set([...posts,...data])
    setPosts([...uniqueData]);
    setIndex(posts?.length + 7);
    setLoading(false);
  };

  useEffect(() => {
    console.log("hello")
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading) {
        addMoreData();
      }
    });

    if (bottom.current) {
      observer.observe(bottom.current);
    }

    return () => {
      if (bottom.current) {
        observer.unobserve(bottom.current);
      }
    };
  }, [loading]);

  return (
    <div className="infinite-scroll-container">
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <p>{post.id}</p>
            <p>{post.name}</p>
            <p>{post["price(₹)"]}</p>
          </li>
        ))}
      </ul>
      {loading && <div className="loading">Loading...</div>}
      <div ref={bottom} />
    </div>
  );
}

export default App;
