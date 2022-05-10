/* exported includes */
/*
begin looking at the member of the group at position 0
if the value of that member is the same as the input value
display true
if not go to the next member of the group and repeat
if there is no group member who's value matches the input value
display false
*/
// function includes(array, value) {
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] === value) {
//       return true;
//     }
//   }
//   return false;
// }

function includes(array, value) {
  const result = array.filter(indexVal => {
    return indexVal === value;
  });

  return result[0] !== undefined;
}
