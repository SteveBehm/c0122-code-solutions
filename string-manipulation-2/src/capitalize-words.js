/* exported capitalizeWords */
/*
look at the input group
begin looking at the first character in the group
if that character is not the lower case version of itself or a " "
change into lower case version and store in new lower case container
if it is store it in the lower case container and move to the next character
repeat these steps until you've gone through every character in the group
you will reach the end of the group when there is no character after the current character
begin going through each character in the lower case group
the first character in the group should be turned into the upper case version of itself
then stored in an upper case group
the next characters preceding a ' ' character will all go into another "restOfStr" container
the first character after the ' ' character will become the upper case version of itself and
stored in the upper case group
the characters after this character until the next space will be store in the restOfStr container
look at the container with the upper case versions of the first characters

*/
function capitalizeWords(string) {
  var lowerCaseStr = string.toLowerCase();
  var listOfWords = [];
  var currentWord = '';
  var finalString = '';
  for (var i = 0; i < lowerCaseStr.length; i++) {
    if (string[i] !== ' ') {
      currentWord += lowerCaseStr[i];
    } else {
      listOfWords.push(currentWord);
      currentWord = '';
    }
  }
  listOfWords.push(currentWord);
  for (var j = 0; j < listOfWords.length; j++) {
    for (var k = 0; k < listOfWords[j].length; k++) {
      if (k === 0) {
        finalString += listOfWords[j][k].toUpperCase();
      } else {
        finalString += listOfWords[j][k];
      }
    }
    finalString += ' ';
  }
  return finalString.slice(0, -1);
}
