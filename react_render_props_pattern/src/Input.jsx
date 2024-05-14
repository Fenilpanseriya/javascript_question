import React, { useState } from 'react'

const Input = (props) => {

    const [value,setValue]=useState(null);
    const handleChange=(e)=>{
        e.preventDefault();
        setValue(e.target.value);
    }
  return (
    <div>
        <input type='text' value={value} onChange={handleChange}/>
        <br/>
        {props.belowText(value)}

    </div>
  )
}

export default Input