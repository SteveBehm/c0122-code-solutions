/* exported capitalizeWord */
/*
begin looking at the given output group
turn each character into lowercase casing
store that new group in its own container
if the lowercase group has a character profile that is
javascript
make the first and fifth characters upper case and return the modified group
otherwise
take the lower case group and remove the first character
store the first character in its own group
store the rest of the characters in their own group
take the upper case version of the first character group
and combine it with the rest of the lowercase group
store that in a new group container
display the newest group container
*/
// function capitalizeWord(string) {
//   var lowCaseStr = string.toLowerCase();
//   if (lowCaseStr === 'javascript') {
//     return 'JavaScript';
//   }
//   var firstLetter = lowCaseStr.substring(0, 1);
//   var restOfLetters = lowCaseStr.substring(1);
//   var newWord = firstLetter.toUpperCase() + restOfLetters;
//   return newWord;
// }

function capitalizeWord(word) {
  const lwrCaseWord = word.toLowerCase();
  let outputStr = '';
  if (lwrCaseWord === 'javascript') {
    return 'JavaScript';
  }

  for (let i = 0; i < lwrCaseWord.length; i++) {
    if (i === 0) {
      outputStr += lwrCaseWord[i].toUpperCase();
    } else {
      outputStr += lwrCaseWord[i];
    }
  }
  return outputStr;
}
