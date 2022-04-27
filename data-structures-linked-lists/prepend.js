/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {
  const newList = new LinkedList(list);
  newList.next = list;
  newList.data = value;
  return newList;
}
