/* exported reverseWord */
/*
create a storage container for the output
begin looking at the first character from the input
go to the next character until there are no more characters after the current
this is the last character
put that character into the storage container
then go backwards to the character before the last
put that character into the storage container
repeat until there are no more character after the current
display the storage container
*/
// function reverseWord(word) {
//   var reversed = '';
//   for (var i = word.length - 1; i >= 0; i--) {
//     reversed += word[i];
//   }
//   return reversed;
// }

function reverseWord(word) {
  let outputStr = '';
  for (let i = word.length - 1; i >= 0; i--) {
    outputStr += word[i];
  }
  return outputStr;
}
