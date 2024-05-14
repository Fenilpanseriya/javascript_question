import React, { forwardRef } from 'react'
import withDimension from './WithDimension';
const Comp1 = (props,ref) => {
  return (
    <>
    <div ref={ref}>width is {props.width} and height is {props.height}</div>
    <div>
        random number is {props.num}
    </div>
    </>
  )
}

export default withDimension(forwardRef(Comp1));