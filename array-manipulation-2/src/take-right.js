/* exported takeRight */
/*
create a storage container for the output
begin looking at the member in the group in position 0
if there is no value in the first member
display the given group
if there is a member value
go through each member in the group to do determine total number of members
go to the member in the position that is equal to the total number of members
minus the given number input
store the value of that member in the output
continue to the next member and repeat
repeat until there is no more members after the current member
display the output storage container
*/
// function takeRight(array, count) {
//   var outputArr = [];
//   if (count > array.length) {
//     outputArr = array;
//   } else {
//     for (var i = array.length - count; i < array.length; i++) {
//       outputArr.push(array[i]);
//     }
//   }
//   return outputArr;
// }

function takeRight(array, count) {
  const outputArr = [];
  if (count > array.length) return array;

  for (let i = array.length - count; i < array.length; i++) {
    outputArr.push(array[i]);
  }

  return outputArr;
}
