import { useEffect, useRef, useState } from "react"

const withDimension=(Component)=>{
    return (props)=>{
        const [width,setWidth]=useState(null);
        const [height,setHeight]=useState(null);


        const ref=useRef();

        useEffect(()=>{
            if(ref.current){
                setWidth(ref.current.offsetWidth);
                setHeight(ref.current.offsetHeight);
            }
        },[ref])
        console.log(height,width)
        return(
            <Component ref={ref} width={width} height={height} num={props.num}/>
        )
    }
}


export default withDimension;