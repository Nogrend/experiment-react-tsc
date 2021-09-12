import React, { useState } from "react";

export default function Button() {
  const [count, setCount] = useState(0);

  function buttonHandler() {
    setCount(count + 1);
  }
  return (
    <div>
      <button onClick={buttonHandler}>Click me!</button>
      <h1>{count}</h1>
    </div>
  );
}
