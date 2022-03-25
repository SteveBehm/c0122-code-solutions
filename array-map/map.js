/*
define map() from scratch as if it did not already exist on arrays
*/

function map(array, transofrm) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(transofrm(array[i]));
  }

  return newArray;
}
