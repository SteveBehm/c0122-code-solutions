/* exported lastChars */
/*
create a storage container for the final output
start going through characters in the given string
begin with the last character
this is the character with no character after it
go to the next character backwards as many times as is equal to the given length number
when at the point, store all the characters visited before into the final output container
display that container
*/
// function lastChars(length, string) {
//   var finalStr = '';
//   finalStr = string.slice(-length);
//   return finalStr;
// }

function lastChars(length, string) {
  const finalStr = string.substring(string.length - length);
  return finalStr;
}
