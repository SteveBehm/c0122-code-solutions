/* exported takeTop */

function takeTop(stack) {
  if (!stack) {
    return undefined;
  } else {
    return stack.pop();
  }
}
