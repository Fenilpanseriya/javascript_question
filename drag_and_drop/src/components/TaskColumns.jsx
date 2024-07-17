import React, { forwardRef, useEffect, useState } from 'react'

const TaskColumns = forwardRef(({status},ref) => {
    const [task,setTask]=useState([]);
    useEffect(()=>{
        setTask(JSON.parse(localStorage.getItem(status)))
        console.log(task)
    },[])
    
  return (
    <>
        <div style={{width:"30%",gap:"8px",backgroundColor:"lightblue",border:"2px solid black",alignItems:"center",margin:"0 auto"}}>
            <h1>{status}</h1>
            {
                task?.map((item,index)=>{
                    return <div key={item.id} style={{padding:"1rem",color:"black",backgroundColor:"blue",boxShadow:"0 0 8px rgba(0,0,0,0.5)"}}>
                        <h2>
                            {item.name}
                        </h2>
                    </div>
                })
            }
        </div>
    </>
  )
})

export default TaskColumns