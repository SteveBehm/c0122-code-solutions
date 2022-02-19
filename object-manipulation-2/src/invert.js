/* exported invert */
/*
create a storage container for the output
begin looking at each member of the input group
take the members value and place it in the output storage
as the member.
then place the input member as the value of the output member
do that for each member of the input group
display the output storage
*/
function invert(source) {
  var obj = {};
  for (var prop in source) {
    obj[source[prop]] = prop;
  }
  return obj;
}
