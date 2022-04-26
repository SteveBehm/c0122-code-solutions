/* exported postpone */

function postpone(queue) {
  if (queue.peek() === undefined) return queue;

  let value = null;

  value = queue.dequeue();

  queue.enqueue(value);
}
