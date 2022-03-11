/* exported difference */
/*
create a storage container fot he output group
go through each group member in the first given group
if any of the values of the members of the first group
don't match the values of any member in the second group
put that values into the output group
then go through the second group and repeat the same process
but comparing values in the second to values in the first
display the final output group
*/
function difference(first, second) {
  var outputArr = [];
  // loop through the first group to compare values in the
  // first group to values in the second array.
  // looping through the first array will get the desired
  // output order in the output group
  for (var i = 0; i < first.length; i++) {
    // includes() checks if a value is present in an array
    if (!second.includes(first[i])) {
      outputArr.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (!first.includes(second[j])) {
      outputArr.push(second[j]);
    }
  }
  return outputArr;
}
