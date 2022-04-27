/* exported takeFront */

function takeFront(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  } else {
    return queue.dequeue();
  }
}
