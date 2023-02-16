import React from "react";
import useCounter from "./Components/useCounter";
export default function App() {
  const [count, Increment, Decrement] = useCounter();
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
}
