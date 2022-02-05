/* exported getLastChar */
/*
create an output storage container
begin looking at the input's first character
store that character
check to see if there is a character after the previous
If there is, replace the previous character with current character
repeat this process until there is not another character after the current character
display the last character to be put in the output storage container
*/

function getLastChar(string) {
  return string.charAt([string.length - 1]);
}
