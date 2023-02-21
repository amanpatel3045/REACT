import { useState,useEffect } from "react";
const Component = () =>{
  const [data,setData]=useState(0);
  useEffect(()=>{
console.log("useEffect Called");
return () =>{
  console.log("cleanup function called");
}
  },[data])
  return(
    <>
    <h1>DATA {data}</h1>
    <button onClick={()=>setData(data+1)}>CHANGE</button>

    
    </>
  )
}
export default Component
