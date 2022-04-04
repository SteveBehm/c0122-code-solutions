import React from 'react';
import ReactDOM from 'react-dom/client';
import { Carousel } from './carousel';

const pokedex = [
  {
    id: 1,
    name: ' Bulbasaur ',
    url: '../dist/images/001.png'
  },
  {
    id: 2,
    name: 'Charmander',
    url: '../dist/images/004.png'
  },
  {
    id: 3,
    name: 'Squirtle',
    url: '../dist/images/007.png'
  },
  {
    id: 4,
    name: 'Pikachu',
    url: '../dist/images/025.png'
  },
  {
    id: 5,
    name: 'JigglyPuff',
    url: '../dist/images/039.png'
  }
];

const element = (
  <Carousel pokedex={pokedex}/>
);

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(element);
