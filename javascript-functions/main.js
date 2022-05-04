
function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var minsToSecs = convertMinutesToSeconds(5);
console.log('value of seconds for 5 minutes:', minsToSecs);

function greet(name) {
  var sayHi = 'Hi ' + name + '!';
  return sayHi;
}

var greetPerson = greet('Steve');
console.log('value of greeting:', greetPerson);

function getArea(width, height) {
  var theArea = width * height;
  return theArea;
}

var newArea = getArea(17, 42);
console.log('value of the area:', newArea);

function getFirstName(person) {
  var aPerson = person.firstName;
  return aPerson;
}

var personFirstName = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('value of someone\'s first name:', personFirstName);

function getLastElement(array) {
  var arrLastElement = array[array.length - 1];
  return arrLastElement;
}

var lastElementOfArr = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('value of last element in array:', lastElementOfArr);
