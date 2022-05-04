/* eslint-disable no-console */

const convertMinutesToSeconds = minutes => minutes * 60;
console.log('value of seconds for 5 minutes:', convertMinutesToSeconds(5));

const greet = name => `Hey ${name}`;
console.log('greeting:', greet('steve'));

const getArea = (width, height) => width * height;
console.log('area:', getArea(17, 42));

const getFirstName = person => person.firsName;
console.log("person's first name:", getFirstName({ firsName: 'Steve', lastName: 'Behm' }));

const getLastElement = array => array[array.length - 1];
console.log('last value in array:', getLastElement(['propane', 'and', 'gasoline', 'grills']));
