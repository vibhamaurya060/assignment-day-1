import React, { useEffect, useRef } from 'react'

const InputFocus = () => {
    const inputRef=useRef(null)
    
    useEffect(()=>{
        inputRef.current.focus()
    },[]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        const value=inputRef.current.value;
        console.log(value)

        inputRef.current.value="";
        inputRef.current.focus();
    };

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input ref={inputRef} type='text' placeholder='Enter user data'/>
        <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default InputFocus