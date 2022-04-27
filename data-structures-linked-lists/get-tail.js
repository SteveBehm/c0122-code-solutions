/* exported getTail */

function getTail(list) {
  if (list.next === null) {
    return list.data;
  }
  let lastVal;
  while (list) {
    lastVal = list;
    list = list.next;
  }
  return lastVal.data;
}
