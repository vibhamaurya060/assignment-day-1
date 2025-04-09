
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
   const [timer, setTimer]=useState(0);
   const intervalRef=useRef(null);

   const handleStart=()=>{
    if(intervalRef.current) return;
    intervalRef.current=setInterval(()=>{
      setTimer((prev)=>prev+1);
    }, 1000);
   };

   const handlePause=()=>{
    clearInterval(intervalRef.current);
    intervalRef.current=null;
   } 

   const handleReset=()=>{
    clearInterval(intervalRef.current);
    intervalRef.current=null;
    setTimer(0);
   };
 
   useEffect(()=>{
    return ()=> clearInterval(intervalRef.currtent);
   },[]);

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
