import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import TaskColumns from './components/TaskColumns';
import { useEffect, useRef, useState } from 'react';
let todo=[
  {id:0,name:"expressjs"},
  {id:1,name:"react"},
  {id:2,name:"nodejs"},
]
let doing=[
  {id:0,name:"javascript"},
]
let done=[
  {id:0,name:"git"},
  {id:1,name:"mongodb"},
  {id:2,name:"mysql"},
]
function App() {
  const ref=useRef(null)
  const [draggedCard,setDraggedCard]=useState(null)
  const [task,setTask]=useState([todo,doing,done])
  const [index,setIndex]=useState(-1)
  const [column,setColumn]=useState(-1)
  useEffect(()=>{
    if(index !=-1 && column!= -1){
      let arr=task[column] || [];
      let srcColumn=Number(draggedCard?.split('-')[1])
      console.log("srcColumn is ",srcColumn)
      let srcItems=task[srcColumn]
      let srcIndex=Number(draggedCard?.split('-')[0])
      console.log("src index is ",srcIndex)
      console.log("new index ",index)
      console.log("new column ",column)
      console.log(task)
      let currentTask=task;
      let destTask=task[column];
      destTask=[...destTask.slice(0,index),srcItems[srcIndex],...destTask.slice(index)]
      console.log("dest item ",destTask);
      currentTask[column]=destTask;

      srcItems=[...srcItems.slice(0,srcIndex),...srcItems.slice(srcIndex+1)];
      console.log("src items ",srcItems)

      currentTask[srcColumn]=srcItems

      setTask(currentTask)
      setDraggedCard(null)
    }
    
  },[index,task])
  return (
    <div className="App">
      <Header ref={ref}/>
      <div className="columns">
          <TaskColumns status={"todo"} ref={ref} tasks={task[0]} setDraggedCard={setDraggedCard} column={0} setIndex={setIndex} setColumn={setColumn}/>
          <TaskColumns status={"doing"} ref={ref} tasks={task[1]} setDraggedCard={setDraggedCard} column={1} setIndex={setIndex} setColumn={setColumn}/>
          <TaskColumns status={"done"} ref={ref} tasks={task[2]} setDraggedCard={setDraggedCard} column={2} setIndex={setIndex} setColumn={setColumn}/>
      </div>
    </div>
  );
}

export default App;
