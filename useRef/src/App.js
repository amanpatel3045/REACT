import "./styles.css";
import React, { useState,useRef } from 'react'
export default function App() {
  const [name,setName]=useState("")
  const refElement=useRef(" ");
  function submit(){
refElement.current.style.color="blue"
refElement.current.value="Patel"
  }
  function reset(){
    setName(" ");
    refElement.current.focus()
  }
  return (
    <div className="App">
      <h1>useRef Hook</h1>
      <h2>using useRef we can directly manipulate the DOM (Web Page) with the help of current object</h2>
     <input type="text" ref={refElement} value={name} onChange={(e)=>setName(e.target.value)}></input>
   <button onClick={reset}>RESET</button>
   <button onClick={submit}>Submit</button>
    </div>
  );
}
