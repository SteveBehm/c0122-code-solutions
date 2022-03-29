import React from 'react';
import ReactDOM from 'react-dom';

// render is used to the mount the element to the DOM
ReactDOM.render(React.createElement(
  'h1',
  null,
  'Hello, React!'
),
document.getElementById('root')
);

// You can also set the React.createElement to a variable
// and the getElementById element to a variable
// then just pass the two elements in the render method of
// ReactDOM object
// Doing this makes it easier to use console.log while testing
