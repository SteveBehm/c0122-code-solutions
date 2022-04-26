/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) return undefined;

  const first = queue.peek();
  queue.dequeue();
  const second = queue.peek();

  if (second === undefined) {
    return first;
  }

  if (first <= second) {
    queue.dequeue();
    queue.enqueue(second);
    return first;
  } else {
    queue.enqueue(first);
    queue.dequeue();
    return second;
  }
}
