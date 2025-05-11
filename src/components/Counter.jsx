import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{backgroundColor: "blue", color: "white", borderRadius: "7px", padding: "20px "}}>
      <h2>Count: {count}</h2>
      <div style={{justifyContent: "space-around", display: "flex"}}>
      <button  onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
    </div>
  );
}

export default Counter;