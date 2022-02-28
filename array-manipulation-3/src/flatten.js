/* exported flatten */
/*
create an empty storage container for our final output
if the input given has no members
display the empty group

go through each member in the given input group
if the member does not have more members inside of it
put that member value into our storage output group

if that member does have more group members in it go through each of
those group members checking to see if they have more group members
within them and if so continuing the same process until each member of
the groups has been seen.
for every member put their value into the output storage as a value.
display the final output group
*/
function flatten(array) {
  // create an empty array where we will push elements from nested array
  // passed as a parameter.
  var flatArray = [];
  // if the array is empty
  // the final output will be equal to the given input
  if (array.length === 0) {
    return array;
  }

  for (var i = 0; i < array.length; i++) {
    // check if the current value of the array is an instance of "array" type.
    // If so, we call the function again (recursion) and pass as a parameter
    // array[i] of original passed array
    if (Array.isArray(array[i]) === true) {
      for (var j = 0; j < array[i].length; j++) {
        // iterate through the nested array
        flatArray.push(array[i][j]);
        // if the value of the nested array is not an array push it into
        // the output array
      }
    } else {
      // if the value of array[i] was not an array
      // push that value into the output array.
      flatArray.push(array[i]);
    }
  }
  // return the final output array
  return flatArray;
}
