import React, { useEffect, useState } from "react";

export default function Button() {
  const [count, setCount] = useState(110);

  function buttonHandler() {
    setCount(count + 1);
  }

  useEffect(() => {
    document.title = `Count = ${count}`;
  }, [count]);

  return (
    <div>
      <button onClick={buttonHandler}>Click me!</button>
      <h1>{count}</h1>
    </div>
  );
}

//https://fettblog.eu/typescript-react/hooks/#usestate
