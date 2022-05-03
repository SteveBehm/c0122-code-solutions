import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function CustomButton() {
  const [clicked, setClick] = useState(() => {
    return false;
  });

  function handleClick() {
    if (clicked) {
      setClick(false);
    } else {
      setClick(true);
    }
  }
  return (
    <button onClick={handleClick}>{clicked ? 'Thank you' : 'Click Me!'}</button>
  );
}

// class CustomButton extends React.Component {
//   // FIRST instantiate a CustomButton object from this class
//   constructor(props) {
//     super(props);
//     this.state = { isClicked: false };

//     this.handleClick = this.handleClick.bind(this);
//     // bind creates a permanent this object
//     // create a bound copy of the prototype method handleClick
//     // assign the bound copy to an "own" property of this object
//   }

//   handleClick() {
//     // decide how to update state in event listeners
//     // please transition to a new state
//     this.setState({ isClicked: true });
//     // schedules a re-render with a new state
//   }

//   // NEXT React immediately call the render method to get the the React elements
//   render() {
//     // 100% decide on how the UI should look
//     if (this.state.isClicked === true) {
//       return (
//         <button onClick={this.handleClick}>Thanks!</button>
//         /*
//         {
//           type: 'button,
//           props: {
//             children: 'Thanks!'
//           }
//         }
//         */
//       );
//     } else {
//       return (
//         <button onClick={this.handleClick}>Click Me!</button>
//         /*
//         {
//           type: 'button,
//           props: {
//             onClick: this.handleClick,
//             children: 'Click Me!'
//           }
//         }
//         */
//       );
//     }
//   }
// }

const element = (
  <CustomButton />
);

ReactDOM.render(
  element,
  document.querySelector('#root')
);
