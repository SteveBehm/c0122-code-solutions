const takeAChance = require('./take-a-chance');
const promObj = takeAChance('Steve');

promObj.then(value => {
  console.log('resolve:', value);
});

promObj.catch(error => {
  console.error('error:', error);
});
