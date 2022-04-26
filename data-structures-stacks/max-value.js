/* exported maxValue */
/*
  store the first value
  store the next value
  compare the two
*/

function maxValue(stack) {
  let lastVal = null;
  let currentVal = null;

  if (stack.peek() === undefined) {
    return -Infinity;
  } else {
    lastVal = stack.peek();
  }

  while (stack.pop() !== undefined) {
    currentVal = stack.peek();

    if (currentVal > lastVal) {
      lastVal = currentVal;
    }
  }

  return lastVal;
}
