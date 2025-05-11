import { useState } from 'react';

function Counter() {
  const [degree, setDegree] = useState(0);

  const increase = () => setDegree(degree + 1);
  const decrease = () => setDegree(degree - 1);

  return (
    <div>
      <h2>Degree: {degree}°</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

export default Counter;
