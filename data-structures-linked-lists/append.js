/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

/*
  go through each value
  if the next value is null
  then set the next value equal to the value given
*/

function append(list, value) {
  const endVal = new LinkedList(value);

  if (!list.next) {
    return list.data;
  }

  let lastVal;
  while (list) {
    lastVal = list;
    list = list.next;
  }

  lastVal.next = endVal;
  return lastVal;
}
