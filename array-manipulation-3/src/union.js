/* exported union */
/*
create an empty storage container for the output group
go through each member of the first group
if the value of that member in the group is unique and being
seen for the first time
put that value into the output group storage container
then look at the second group members one at a time
if the values of the second group dont match any of the values
already stored in the output group
then put the value of that member into the output group as well
display the output group
*/
function union(first, second) {
  var outputArr = [];

  for (var i = 0; i < first.length; i++) {
    if (first.indexOf(first[i]) !== -1) {
      outputArr.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (!outputArr.includes(second[j])) {
      outputArr.push(second[j]);
    }
  }
  return outputArr;
}
