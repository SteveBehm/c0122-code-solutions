/* exported dropRight */
/*
create a storage container for the final output
begin looking at each member in the group
start with the member at position 0
if that member's position is less than the total number of members
minus the number given to us in the input
store the value of that member in the final output
if it is not less than
do not store it in the final output
stop when you come across the first member who's value you cannot store
display final storage container
*/
function dropRight(array, count) {
  var outputArr = [];
  for (var i = 0; i < array.length - count; i++) {
    outputArr.push(array[i]);
  }
  return outputArr;
}
