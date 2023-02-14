import "./styles.css";
import React from 'react'
import {useState,useMemo} from 'react'
export default function App() {
  const [add,setAdd]=useState(0);
  const [minus,setMinus]=useState(100);
  const multiplication=useMemo(function multiply(){
    console.log("******************")
  return add*10;
  
  },[add])
  return (
    <div className="App">
      <h2>{multiplication}</h2>
      <button  onClick={()=>setAdd(add+1)}>ADD</button>
      <button  onClick={()=>setMinus(minus-1)}>SUBTRACT</button>
    
    </div>
  );
}
