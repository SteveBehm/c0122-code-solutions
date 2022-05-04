/* exported getKeys */
/*
create a storage container for the output group
look at the given group
begin at the first member in the group
put the group member into the storage container
go to the next member in the group and repeat
stop when there is no member after the current member
display the storage container
*/
// function getKeys(object) {
//   var keysArray = [];
//   for (var keys in object) {
//     keysArray.push(keys);
//   }
//   return keysArray;
// }

function getKeys(object) {
  const keysArr = [];
  for (const key in object) {
    keysArr.push(key);
  }
  return keysArr;
}
