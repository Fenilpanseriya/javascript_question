import React, { forwardRef } from 'react'
import Taskcard from './Taskcard';

const TaskColumns = forwardRef(({status,tasks=[],setDraggedCard,column,setIndex,setColumn},ref) => {
    
    
  return (
    <div style={{display:'flex',flex:1,width:"30%",backgroundColor:"lightblue",gap:"10px",flexDirection:"column",textAlign:"center"}}>
        <h1>{status}</h1>
        {
            tasks?.map((task,index)=>{
                return <Taskcard key={task.id} task={task} setColumn={setColumn} index={index} column={column} setDraggedCard={setDraggedCard} setIndex={setIndex}/>
            })
        }
    </div>
  )
})

export default TaskColumns