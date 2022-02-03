/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;
  while (currentNumber < 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}
console.log('getNumbersToTen()', getNumbersToTen());

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}
console.log('getEvenNumberToTwenty', getEvenNumbersToTwenty());

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}
console.log('repeatWord', repeatWord('Javascript', 30));

function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}
console.log("logEachCharacter('Javascript)", logEachCharacter('Javascript'));

function doubleAll(numbers) {
  var doubled = [];
  for (var i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}
console.log('doubleAll[5, 7, 11]', doubleAll([5, 7, 11]));

function getKeys(object) {
  var keys = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys;
}
console.log('getKeys({isbn: "978-1449365035", title: "Speaking JS", author: "Dr. Axel Rauschmayer"})', getKeys({ isbn: '978-1449365035', title: 'Speaking JS', author: 'Dr. Axel Rauschmayer' }));

function getValues(object) {
  var values = [];
  for (var key in object) {
    values.push(object[key]);
  }
  return values;
}
console.log('getValues({isbn: "978-1449365035", title: "Speaking JS", author: "Dr. Axel Rauschmayer"})', getValues({ isbn: '978-1449365035', title: 'Speaking JS', author: 'Dr. Axel Rauschmayer' }));
