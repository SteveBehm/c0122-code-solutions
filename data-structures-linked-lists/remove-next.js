/* exported removeNext */

function removeNext(list) {
  if (list.next) {
    const remainder = list.next.next;
    list.next = remainder;
  }
}
