const num1 = 12;
const num2 = 14;
const num3 = 67;

const maxVal = Math.max(num1, num2, num3);
console.log('maximumValue:', maxVal);

const heroes = ['Dr. Strange', 'Batman', 'Superman', 'Deadpool'];
let randomNumber = Math.random();
randomNumber *= heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);

const randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

const library = [
  {
    title: 'Blink',
    author: 'Malcolm Gladwell'
  },
  {
    title: 'Outliers',
    author: 'Malcolm Gladwell'
  },
  {
    title: 'Artemis',
    author: 'Andy Weir'
  }
];

const lastBook = library.pop();
console.log('lastBook:', lastBook);

const firstBook = library.shift();
console.log('firstBook:', firstBook);

const js = {
  title: 'Javascript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library:', library);

var fullName = 'Steve Behm';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
