/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) {
    return stack;
  } else {
    const first = stack.pop();
    stack.push(value);
    stack.push(first);

    return stack;
  }
}
