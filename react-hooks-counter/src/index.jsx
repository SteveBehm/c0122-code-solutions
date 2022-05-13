import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './counter';

const element = (
  <Counter />
);

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(element);
