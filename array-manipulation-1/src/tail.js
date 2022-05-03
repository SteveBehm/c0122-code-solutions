/* exported tail */
/*
create a storage container for your output
find the first member of the group
begin looking at the member after the first member
if that 2nd member has a value put it in the storage container
go to the next member and repeat
stop when there is no member to continue on to
displau the storage container
*/
// function tail(array) {
//   var newArray = [];
//   for (var i = 1; i < array.length; i++) {
//     newArray.push(array[i]);
//   }
//   return newArray;
// }

function tail(array) {
  const outputArr = [];
  for (let i = 1; i < array.length; i++) {
    outputArr.push(array[i]);
  }
  return outputArr;
}
