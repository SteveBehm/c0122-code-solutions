/* exported capitalize */
/*
turn all the characters in word to lowercase
remove the first character from the word
make that first character upper case
take the word without the first character and the upper case first letter and combine the two
*/

function capitalize(word) {
  var lowerCaseWord = word.toLowerCase();
  var lowerCaseWithoutFirst = lowerCaseWord.slice(1, lowerCaseWord.length);
  return word[0].toUpperCase() + lowerCaseWithoutFirst;
}
