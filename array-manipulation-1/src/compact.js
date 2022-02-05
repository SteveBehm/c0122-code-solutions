/* exported compact */
/*
create a storage container for our future output
begin by looking at each member in the group
start at the beginning of the group of members
when at the first member look to see if it has a value
if that values opposite is not a truthy value
put that value into the storage container
if the opposite of the value is truthy do not put that value in storage container
move on to the next member and repeat
when there is no member after the current member
display the storage container
*/
function compact(array) {
  var truthy = [];
  for (var i = 0; i < array.length; i++) {
    if (!array[i] === false) {
      truthy.push(array[i]);
    }
  }
  return truthy;
}
