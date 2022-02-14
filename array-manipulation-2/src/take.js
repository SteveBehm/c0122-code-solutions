/* exported take */
/*
create a storage container for the final output
begin looking at each member of the group
if that member's position in the group is less than the given number
store the value of that member in the output storage container
if it is not,
do not place the value into the final output storage
display the final output storage
*/
function take(array, count) {
  var outputArr = array.slice(0, count);
  return outputArr;
}
