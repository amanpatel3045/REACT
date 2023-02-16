import { useState } from "react"

function useCounter(){
const [count,setCount]=useState(0)
function Increment(){
  setCount(count+1)
}
function Decrement(){
  setCount(count-1)
}
return [count,Increment,Decrement]
}
export default useCounter
