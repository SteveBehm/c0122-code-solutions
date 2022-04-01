import React from 'react';
import ReactDOM from 'react-dom/client';
import { Stopwatch } from './stopwatch';

const element = (
  <Stopwatch />
);

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(element);
