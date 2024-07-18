import React, {  forwardRef, useState } from 'react'
import "../App.css"
const Header = forwardRef(({status=""},ref) => {
    const [name,setName]=useState("");
    
    const handleChange=(e)=>{
        e.preventDefault();
        console.log(e.target.value)
        setName(e.target.value)
        
    }
    const handleClick=(e)=>{
        
    }
  return (
    <div className="header">
        <input ref={ref} type="text" className="input" value={name} onChange={handleChange}/>
        <button onClick={handleClick}>Add</button>
    </div>  
  )
})

export default Header