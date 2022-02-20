/* exported pick */
/*
create an output storage container
begin looking at each member of the group of the given object
if the value of that member is undefined
display the empty storage container
if not
if the given array values are the same as any member of the
object group.
put the value of the member of the object group in the
final output storage container along with its value
continue through each member of the array group until
you have check the value of each member of the array group
with each member of the object group
display the output storage container

*/

function pick(source, keys) {
  var newObj = {};
  for (var objKey in source) {
    if (source[objKey] === undefined) {
      continue;
    } else if (keys.includes(objKey)) {
      newObj[objKey] = source[objKey];
    }
  }
  return newObj;
}
