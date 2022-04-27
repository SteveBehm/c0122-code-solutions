/* exported removeTail */

function removeTail(list) {
  if (!list.next) return;

  while (list) {
    if (list.next.next === null) {
      list.next = null;
      return list;
    }
    list = list.next;
  }
}
