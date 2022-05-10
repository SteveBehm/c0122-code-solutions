/* exported chunk */
/*
create a storage container for the final output
begin looking at the first member in the group
this is position 0
create at storage container for a smaller group
store all members and values of members that
are between the current position and the current position + the size given
store the small group within the final output group
go to the next member that is the input number positions from the current member
repeat the process until there are no more member after the current member
display the final output group
*/

// function chunk(array, size) {
//   var outputArrays = [];
//   for (var i = 0; i < array.length; i += size) {
//     var chunk = array.slice(i, i + size);
//     outputArrays.push(chunk);
//   }
//   return outputArrays;
// }

// function chunk(array, size) {
//   if (array[0] === undefined) return array;
//   const outputArr = [];
//   let subArr = [];

//   for (let i = 0; i < array.length; i++) {
//     if (subArr.length === size) {
//       outputArr.push(subArr);
//       subArr = [];
//     } else {
//       subArr.push(array[i]);
//     }
//   }
//   console.log(outputArr);
//   return outputArr;
// }

function chunk(array, size) {
  if (array.length === 0) return array;

  const outputArr = [];
  let subArr = [];

  for (let i = 0; i < array.length; i++) {
    subArr.push(array[i]);
    if (subArr.length === size) {
      outputArr.push(subArr);
      subArr = [];
    }
  }
  if (subArr.length > 0) {
    outputArr.push(subArr);
  }

  return outputArr;
}
