/* exported drop */
/*
create a storage container for the final output
start going through the members of the group
start at the member in position 1
if that member's position number is greater than
the input number given minus one
store the value of that member in the output
if it is less,
do not store it in the output container
go through every member in the group until there is not another member after the current member
display the output storage
*/
function drop(array, count) {
  var outputArr = array.slice(count);
  return outputArr;
}
