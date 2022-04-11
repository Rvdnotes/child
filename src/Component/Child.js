import React from 'react'
import './Style.css'

const Child = (props) => {
  return (
    <>
    <div className='child'>
      {/* <h2 style={{color:"blueviolet"}}>{data}</h2> */}
      {/* <h2>{props}</h2> */}
      <h1>child</h1> 
      <button onClick={()=> props.changetitle('let child to parent data pass')} >Click me!</button>
    </div>
    </>
  )
}

export default Child