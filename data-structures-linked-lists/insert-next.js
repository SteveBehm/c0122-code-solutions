/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const clone = new LinkedList(value);
  const restOfList = list.next;
  clone.next = restOfList;
  list.next = clone;
}
