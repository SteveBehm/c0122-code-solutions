/* exported swapFront */

function swapFront(list) {
  if (list.next === null) return list;

  const remainder = list.next.next;
  const second = list.next;
  list.next = remainder;
  second.next = list;
  return second;
}
