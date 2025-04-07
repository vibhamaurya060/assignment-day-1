import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount]=useState(0);
  return (
    <div>
        <h2>Counter: {count}</h2>
        <button onClick={()=>setCount((count)=>count+1)}>INC</button>
        <button onClick={()=>setCount((count)=>count-1)}>DEC</button>
        <button onClick={()=>setCount((count)=>count=0)}>Reset</button>
    </div>
  )
}

export default Counter