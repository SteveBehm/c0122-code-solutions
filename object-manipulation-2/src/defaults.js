/* exported defaults */
/*
go through each member of the target input group
place each member's value into a group of member's values.
go through each member of the source group
if a member of the source group is not the same as another members value
in the targetArr group
add that member and its value to the input target group
*/
function defaults(target, source) {
  var targetArr = Object.keys(target);
  for (var sourceKey in source) {
    if (!targetArr.includes(sourceKey)) {
      target[sourceKey] = source[sourceKey];
    }
  }
}
