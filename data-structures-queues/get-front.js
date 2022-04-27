/* exported getFront */

function getFront(queue) {
  if (queue === undefined) {
    return undefined;
  } else {
    return queue.peek();
  }
}
