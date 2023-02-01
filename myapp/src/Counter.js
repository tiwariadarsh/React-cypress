import React, { useEffect, useState } from 'react';

const Counter = ({ max, step }) => {
  const [count, setCount] = useState(0);
  const countRef = React.useRef(0);

  let message = '';
  console.log("hi",countRef.current)
  if (countRef.current > max) message = 'Higher';
  if (countRef.current <= step) message = 'Lower';

  countRef.current = count;

  const increment = () => {
    setCount(c => c + 1);
  };

  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  useEffect(() => {
    setTimeout(() => {
      console.log(`Count: ${count}`);
    }, 3000);
  }, [count]);

  return (
    <div className="Counter">
      <p>{message}</p>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>
    </div>
  );
};

export default Counter;
