/* exported intersection */
/*
  create an output storage group
  go through each member of the group for input 1
  if the value is the same as a value in the second group
  put that value into the output group
  go through each member of the group
  display the final output group
*/
function intersection(first, second) {
  var outputArr = [];

  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      outputArr.push(first[i]);
    }
  }
  return outputArr;
}
