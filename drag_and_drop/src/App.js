import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import TaskColumns from './components/TaskColumns';
import { useEffect, useRef } from 'react';

function App() {
  const ref=useRef(null)
  useEffect(()=>{
    console.log("render")
  },[ref.current])
  return (
    <div className="App">
      <Header ref={ref}/>
      <div className="columns">
          <TaskColumns status={"todo"} ref={ref}/>
          <TaskColumns status={"doing"} ref={ref}/>
          <TaskColumns status={"done"} ref={ref}/>
      </div>
    </div>
  );
}

export default App;
