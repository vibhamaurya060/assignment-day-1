
import { useEffect, useState } from 'react'
import './App.css'

function App() {
   const [timer, setTimer]=useState(0);

  useEffect(()=>{
    let timerId = setInterval(()=>{
      handleStart() 
    },1000) 
  },[])

   const handleStart=()=>{
    setTimer((prev)=>prev+1);
   }

   const handlePause=()=>{
    setTimer((prev)=>prev);
   }

   const handleReset=()=>{
    setTimer((prev)=>prev=0);
   }
 
  return (
    <>
      <h2>Timer: {timer}</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause} >Pause</button>
      <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default App
