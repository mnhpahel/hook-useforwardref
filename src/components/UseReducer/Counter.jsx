import React, { useReducer, useState } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 3;
    case "decrement":
      return state - 1;
    default:
        return state;  
  }
};

const Counter = () => {
//   const [count, setCount] = useState(0);
  // const incrementHandler = () => {
  //     setCount((preCount) => (preCount +5));
  // };
  // const decrementHandler = () => {
  //     setCount((preCount) => (preCount -5));
  // };

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Count - {count}</div>
      <button type="button" onClick={() => dispatch('increment')}>
        Increment
      </button>
      <button type="button" onClick={() => dispatch('decrement')}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
