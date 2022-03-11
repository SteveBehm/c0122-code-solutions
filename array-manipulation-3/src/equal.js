/* exported equal */
/*
look at each of the input array and determine how many members are in
each group.
If they have a different number of members
return false.
Now, look through each member of the first input group one by one
you will also be looking through the second input group one by one
check to see if the value of each member in both groups are the same
if they aren't, return false.
if both conditions above are true then the groups are identical
display true
*/
function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
