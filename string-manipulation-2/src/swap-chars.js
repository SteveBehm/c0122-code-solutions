/* exported swapChars */
/*
create a storage container for the final ouput
begin by looking at the string input
look at the first character in the group
there are two input numbers, input 1 and input 2
if the character is the same as input one
store the value of the character that is the same as input 2 in the final output
if the character is the same as input 2
store the value of the character that is the same as input 1 in the final output
if the character is not the same as input 1 or input 2
store the value of the current character in the final output
continues this process at each character
stop when there is no character after the current character
display the final output

*/

function swapChars(firstIndex, secondIndex, string) {
  var finalStr = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      finalStr += string[secondIndex];
    } else if (i === secondIndex) {
      finalStr += string[firstIndex];
    } else {
      finalStr += string[i];
    }
  }
  return finalStr;
}
