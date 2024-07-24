import React, { useState } from 'react'

const Decrement = () => {
    const [count, setCount]=useState(300)
    const decrement=()=>{
        setCount(count-1);
    }
  return (
    <div>
        <button onClick={decrement}>decrement</button>
        {count}
    </div>
  )
}

export default Decrement
