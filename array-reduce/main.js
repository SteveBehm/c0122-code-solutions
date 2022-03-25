const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
console.log('sum', sum);

const product = numbers.reduce((previousValue, currentValue) => previousValue * currentValue);
console.log('produce:', product);

const initialValue = 0;
const balance = account.reduce(function (previousValue, currentValue) {
  if (currentValue.type === 'deposit') {
    previousValue += currentValue.amount;
  } else if (currentValue.type === 'withdrawal') {
    previousValue -= currentValue.amount;
  }
  return previousValue;
}, initialValue);
console.log('balance', balance);

const firstValue = {};
const composite = traits.reduce(function (previousValue, currentValue) {
  for (const property in currentValue) {
    previousValue[property] = currentValue[property];
  }
  return previousValue;
}, firstValue);
console.log('composite:', composite);
