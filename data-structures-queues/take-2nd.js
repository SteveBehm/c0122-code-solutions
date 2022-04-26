/* exported take2nd */

function take2nd(queue) {
  if (queue.peek() === undefined) return undefined;

  const first = queue.peek();

  queue.dequeue();
  const second = queue.peek();

  if (second === undefined) {
    return first;
  }

  queue.enqueue(first);
  queue.dequeue();
  return second;
}
