import React, { useEffect, useState } from 'react';

const Counter = () => {
  


  return (
    <div className="Counter">
      <p>{/*Higher or Lower*/}</p>
      <p className="count">{/*Value of Count*/}</p>
      <section className="controls">
        <button >Increment</button>
        <button >Decrement</button>
        <button >Reset</button>
      </section>
    </div>
  );
};

export default Counter;
