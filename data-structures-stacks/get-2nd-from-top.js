/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const top = stack.peek();
  if (stack.peek() === undefined) {
    return undefined;
  } else {
    const twoDwn = stack.peek(stack.pop());
    stack.push(top);
    return twoDwn;
  }
}
