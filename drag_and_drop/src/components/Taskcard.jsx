import React from 'react'
import Dropable from './Dropable'

const Taskcard = ({task,column,setColumn,index,setDraggedCard,setIndex}) => {
    const handleDragStart = (e) => {
        setDraggedCard(index+"-"+column)
    }

  return (
    <>
    {<Dropable setIndex={setIndex} column={column} index={0} setColumn={setColumn}/>}
    <div className='taskcard' draggable onDragStart={handleDragStart}>
        <strong>{task.name}</strong>
    </div>
    <Dropable column={column} index={index+1} setIndex={setIndex} setColumn={setColumn}/>
    </>
  )
}

export default Taskcard