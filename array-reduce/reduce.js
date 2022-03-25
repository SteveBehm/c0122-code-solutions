/*
define reduce() from scratch as if it did not already exist on arrays.
*/

/*
create an output value based on the inital value
loop through the array
*/

function reduce(array, reducer, initialValue) {
  let outputValue = initialValue;

  for (let i = initialValue; i < array.length; i++) {
    outputValue += reducer[array[i]];
  }

  return outputValue;
}
