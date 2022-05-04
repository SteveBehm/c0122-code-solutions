import React, { useState } from 'react';

const HotButton = () => {
  const [clickCount, setCount] = useState(() => {
    return 0;
  });

  function incrementCount() {
    setCount(prevCount => prevCount + 1);
  }

  let temp;
  if (clickCount < 3) {
    temp = 'cold';
  } else if (clickCount < 6) {
    temp = 'cool';
  } else if (clickCount < 9) {
    temp = 'luke-warm';
  } else if (clickCount < 12) {
    temp = 'warm';
  } else if (clickCount < 15) {
    temp = 'hot';
  } else if (clickCount < 18) {
    temp = 'hottest';
  }
  return (
    <button className={temp} onClick={incrementCount}>Hot Button</button>
  );
};

export default HotButton;
// export class HotButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { clickCount: 0 };

//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     // read current state
//     // compute new state
//     // replace the current state
//     const currentClicks = this.state.clickCount;
//     const newClicks = currentClicks + 1;
//     this.setState({ clickCount: newClicks });
//   }

//   render() {
//     if (this.state.clickCount >= 0 && this.state.clickCount < 6) {
//       return (
//         <button className="dark-purple" onClick={this.handleClick}>Hot Button</button>
//       );
//     } else if (this.state.clickCount <= 8) {
//       return (
//         <button className="light-purple" onClick={this.handleClick}>Hot Button</button>
//       );
//     } else if (this.state.clickCount <= 11) {
//       return (
//         <button className="red" onClick={this.handleClick}>Hot Button</button>
//       );
//     } else if (this.state.clickCount <= 14) {
//       return (
//         <button className="orange" onClick={this.handleClick}>Hot Button</button>
//       );
//     } else if (this.state.clickCount <= 17) {
//       return (
//         <button className="yellow" onClick={this.handleClick}>Hot Button</button>
//       );
//     } else if (this.state.clickCount >= 18) {
//       return (
//         <button className="white" onClick={this.handleClick}>Hot Button</button>
//       );
//     }
//   }
// }
