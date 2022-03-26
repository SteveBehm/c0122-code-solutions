/*
define reduce() from scratch as if it did not already exist on arrays.
*/

function reducer(array, reducer, initialValue) {
  var finalValue = initialValue;
  var i = 0;

  if (arguments.length === 2) {
    i = 1;
    finalValue = array[0];
  }

  for (; i < array.length; i++) {
    finalValue = reducer(finalValue, array[i], i, array);
  }

  return finalValue;
}
