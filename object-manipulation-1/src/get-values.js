/* exported getValues */
/*
create a storage container for output
begin looking at the first member in the group
put the value of the first member int he storage container
go to the next member and repeat
stop when there is not another member after the current one
display the storage container
*/
function getValues(object) {
  var arrValues = [];
  for (var keys in object) {
    arrValues.push(object[keys]);
  }
  return arrValues;
}
