/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  while (queue.peek() !== undefined) {
    const value = queue.dequeue();
    if (queue.peek() === undefined) return value;
    if (value <= queue.peek()) {
      return value;
    }
    queue.enqueue(value);
  }
}
