import React, { useState } from 'react'

const UseState1 = () => {
    const [count, setCount]=useState(100)
    const increment=()=>{
        setCount(count+1);
    }

    const decrement=()=>{
        setCount(count-1);
    }
  return (
    <div>
        <button onClick={increment}>Increment</button>
       
    <button onClick={decrement}>decrement</button>
    {count}
</div>
    
  )
}

export default UseState1
