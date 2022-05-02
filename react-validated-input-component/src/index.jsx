import React from 'react';
import ReactDOM from 'react-dom/client';
import { ValidInput } from './validated-input';

const element = (
  <ValidInput />
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
