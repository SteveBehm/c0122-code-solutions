/* exported takeNextSmallest */

// function takeNextSmallest(queue) {
//   while (queue.peek() !== undefined) {
//     const value = queue.dequeue();
//     if (queue.peek() === undefined) return value;
//     if (value <= queue.peek()) {
//       return value;
//     }
//     queue.enqueue(value);
//   }
// }

function takeNextSmallest(queue) {
  let nextSmallest = queue.dequeue();
  while (nextSmallest > queue.peek()) {
    queue.enqueue(nextSmallest);
    nextSmallest = queue.dequeue();
  }
  return nextSmallest;
}
