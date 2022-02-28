/* exported unique */
/*
create an output storage container
if the given group has no members
dsiplay the given input
if it has members begin going through the array one member at a time
look at each member value
if the value of the member in the input group is not equal to any value
in the output storage group
put the value of that member in the output storage group
repeat that process with each member of the input group
display the output storage group
*/
function unique(array) {
  var outputArr = [];
  for (var i = 0; i < array.length; i++) {
    if (outputArr.includes(array[i]) !== true) {
      outputArr.push(array[i]);
    }
  }
  return outputArr;
}
