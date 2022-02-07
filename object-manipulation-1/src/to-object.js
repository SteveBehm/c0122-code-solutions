/* exported toObject */
/*
create a new storage container that will hold one group
look at the first member in the group
the value of the member in the given group
will be the member in the output group
go to the next member of the given group
the value of that member will then be placed in the output group
as the value of the one member
display the storage container with one group member and value pair
*/
function toObject(keyValuePair) {
  var firstArr = keyValuePair.slice(0, 1);
  var secondArr = keyValuePair.slice(1);
  var obj = {};
  obj[firstArr] = secondArr[0];
  return obj;
}
