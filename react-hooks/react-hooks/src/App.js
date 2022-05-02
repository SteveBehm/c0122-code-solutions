import React, { useState } from "react";

function App() {
  // when setting the inital state you can pass a value in useState that will get called everytime the app re-renders.
  // this can slow down the app if the initial state is burdensome
  // or
  // you can pass a callback function that will be return once when the app initially renders
  const [count, setCount] = useState(() => {
    return 1
  })

  // we can use a second hook to avoid having to use an object as the argument to pass into the useState function call
  // which can make calling setState more difficult later on unless you have multiple useState hooks
  const [theme, setTheme] = useState(() => {
  return 'blue'
  })

  function decrementCount() {
    setCount(prevCount => prevCount - 1)
  }

function incrementCount() {
  setCount(prevCount => prevCount + 1)
  setTheme('red')
}

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
