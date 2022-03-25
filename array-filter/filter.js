/*
 define filter() from scratch as if it did not already exist on arrays.
*/

function filter(array, predicate) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (predicate[array[i]] === true) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
