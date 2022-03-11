/* exported zip */
/*
create an output storage container
go through each input groups and determine how many members there
are in each group.
the group with the lowest amount of members is the one we want
to go through next.
take the first member in each group and put them in their own group
then put that new group into the final output group
go to the next members in each group and repeat
repeat until there are no more members to visit in the group
with the smallest amount of members
dsiplay the final output storage

*/
function zip(first, second) {
  // create an output container
  var outputArr = [];
  // Math.min will compare 0 or more numbers and return the number
  // that is smallest. This allows us to not loop through the bigger
  // group if there is one.
  for (var i = 0; i < Math.min(first.length, second.length); i++) {
    // put each value at each index into their own array before
    // pushing it into the final output array
    outputArr.push([first[i], second[i]]);
  }
  return outputArr;
}
