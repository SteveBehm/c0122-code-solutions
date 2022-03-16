const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const firstNum = parseInt(process.argv[2]);
const secondNum = parseInt(process.argv[4]);
const operatorStr = process.argv[3];

if (operatorStr === 'plus') {
  console.log(`result: ${add(firstNum, secondNum)}`);
} else if (operatorStr === 'minus') {
  console.log(`result: ${subtract(firstNum, secondNum)}`);
} else if (operatorStr === 'times') {
  console.log(`result: ${multiply(firstNum, secondNum)}`);
} else if (operatorStr === 'over') {
  console.log(`result: ${divide(firstNum, secondNum)}`);
}
