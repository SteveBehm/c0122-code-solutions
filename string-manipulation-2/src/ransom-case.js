/* exported ransomCase */
/*
look at the group of input characters
create a storage container for the final output
make each character in the group the lowercase version of itself
store the lowercase version in its own container
go through each character in the lower case group one at a time
begin at the first
if the character is not divisible by two without a remainder
make that character upper case and store in final output container
if the character is divisible by 2 without a remainder
store that chracter in the output storage container without modifying its casing
go to the next character and repeat the process
the next character will be added to the output container just after the previous character
stop when there is no more characters after the current characrer in the lower case group
display the final output group

*/
// function ransomCase(string) {
//   var lowerCaseStr = string.toLowerCase();
//   var newWord = '';
//   for (var i = 0; i < lowerCaseStr.length; i++) {
//     if (i % 2 !== 0) {
//       newWord += lowerCaseStr.charAt(i).toUpperCase();
//     } else {
//       newWord += lowerCaseStr.charAt(i);
//     }
//   }
//   return newWord;
// }

function ransomCase(string) {
  const lowerCaseStr = string.toLowerCase();
  let outputStr = '';

  for (let i = 0; i < lowerCaseStr.length; i++) {
    if (i % 2 === 0) {
      outputStr += lowerCaseStr[i];
    } else {
      outputStr += lowerCaseStr[i].toUpperCase();
    }
  }
  return outputStr;
}
