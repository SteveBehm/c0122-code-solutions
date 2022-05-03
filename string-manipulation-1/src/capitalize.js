/* exported capitalize */
/*
turn all the characters in word to lowercase
remove the first character from the word
make that first character upper case
take the word without the first character and the upper case first letter and combine the two
*/

// function capitalize(word) {
//   var lowerCaseWord = word.toLowerCase();
//   var lowerCaseWithoutFirst = lowerCaseWord.slice(1, lowerCaseWord.length);
//   return word[0].toUpperCase() + lowerCaseWithoutFirst;
// }

function capitalize(string) {
  const lowercaseStr = string.toLowerCase();
  const strArr = lowercaseStr.split('');
  const newArr = [];
  for (let i = 0; i < strArr.length; i++) {
    if (i === 0) {
      newArr.push(strArr[i].toUpperCase());
    } else {
      newArr.push(strArr[i]);
    }
  }
  return newArr.join('');
}
