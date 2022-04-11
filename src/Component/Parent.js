import React, {useState}from 'react'
import Child from './Child'
import  './Style.css'

const Parent = () => {
  const [word, setWord] = useState('parent');
  return (
    <>      
    <div className='parent'>
    
       <h1>{word}</h1> 
       {/* <Child data="data from parent"/> */}
       <Child changetitle={word => setWord(word)}/>
      </div>
    </>
    

  )
}

export default Parent