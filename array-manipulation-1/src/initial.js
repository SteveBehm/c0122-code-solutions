/* exported initial */
/*
create a storage container for the output array
go through each member of the group
start at the first member
if the current member has a value
check to see if there is another member after it
if there is a next member put the current member value into container
if there is not a next member don't put the current member's value into the container
display the storage container
*/
function initial(array) {
  var newArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
