import React, { useEffect, useState } from "react";
import "../App.css"

const Dropable = ({index,setIndex,setColumn,column}) => {
    const [drop,setDrop]=useState(false);
    const handleDrop=(e)=>{
        e.preventDefault();
        setDrop(true)
    }
    const exitDrop=(e)=>{
        e.preventDefault();
        setDrop(false) 
        setIndex(index);
        setColumn(column)
    }
  return <div className={drop?"show":"hide"} onDragEnter={handleDrop} onDragLeave={exitDrop}>drop here</div>;
};

export default Dropable;
