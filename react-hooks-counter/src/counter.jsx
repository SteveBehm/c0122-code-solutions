import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [isClicked, setClick] = useState(false);
  const text = isClicked ? 'The button has been clicked' : 'Button has not been clicked';
  const [count, setCount] = useState(0);

  // passing in the second argument as an empty array literal
  // will mean the function will run only the first time the component renders
  // if you want it to run when a specific variable's value changes
  // put that variable into the array
  useEffect(() => {
    const count = localStorage.getItem('count');
    if (count) {
      setCount(Number.parseInt(count));
    }
  }, []);

  // update the count value in local storage each time the count value changes
  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  return (
    <>
      <div className='container'>
        <div className='text-div'>
          {text}
        </div>
      </div>
      <div className='container'>
        <button className='btn' onClick={() => {
          setClick(true);
          setCount(count + 1);
        }}>Click Me!</button>
      </div>
      <div className="container">
        <div className="text-div">
          Clicked: {count} times
        </div>
      </div>
    </>
  );
};

export default Counter;
