/* exported reverse */
/*
create a storage container for our output group
look at our output beginning with the first member of the group
go through members of the group until the current member
doesn't have a member after it
put the value of that current member into the storage container
go to the previous member and put their value into the storage container
repeat until there is not another previous member
dislay the storage container
*/
function reverse(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
