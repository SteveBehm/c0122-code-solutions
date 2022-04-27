/* exported getLength */

function getLength(list) {
  let count = 0;
  if (list.data !== null && list.next === null) {
    return 1;
  }
  while (list) {
    list = list.next;
    count++;
  }

  return count;
}
