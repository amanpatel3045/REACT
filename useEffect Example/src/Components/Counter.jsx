import React, { useEffect, useState } from 'react';

const Counter = () =>{
  
  const [count,setCount] = useState(0);

  useEffect(()=>{
    console.log("inside useEffect");
    // document.title=`${count} Times`;
  })
  console.log("before useEffect");
  return(
    <div className="App">
 <h1>{count}</h1>
 <button onClick={()=>setCount(count+1)}>CLICK</button>


      </div>
  )
}
export default Counter;
