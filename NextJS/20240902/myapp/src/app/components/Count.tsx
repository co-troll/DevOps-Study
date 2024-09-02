"use client"
import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  console.log(1234);
  const handleIncrement = () => {
    setCount(count + 1);
  }

  const handleDecrement = () => {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>count : {count}</h1>
      <button onClick={handleIncrement}>증가</button>
      <button onClick={handleDecrement}>감소</button>
    </div>
  )
}

export default Count;