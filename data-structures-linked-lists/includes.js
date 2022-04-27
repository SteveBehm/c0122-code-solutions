/* exported includes */

function includes(list, value) {
  if (list.data === value) {
    return true;
  }

  while (list) {
    if (!list.next) {
      return false;
    }
    if (list.next.data === value) {
      return true;
    }
    list = list.next;
  }
}
