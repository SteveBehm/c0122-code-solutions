/* exported getTop */

function getTop(stack) {
  if (!stack) {
    return undefined;
  } else {
    return stack.peek();
  }
}
