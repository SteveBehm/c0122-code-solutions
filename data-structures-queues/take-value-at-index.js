/* exported takeValueAtIndex */

/*
  look at the value at the front
  remove that value as long as you havent removed more
  values than the index value
  look at the new value
  remove it if necessary
  when you have removed the total number of values
  equal to index
  remove the value at the front and then put it in the back
*/

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  for (let i = 0; i < index; i++) {
    const value = queue.dequeue();
    queue.enqueue(value);
  }
  return queue.dequeue();
}
