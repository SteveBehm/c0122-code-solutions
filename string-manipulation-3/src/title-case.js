/* exported titleCase */
/*
Capitalize the first word of the title and any subtitle
Capitalize all major words including the second part of a major hyphenated word
Capitalize words that are four letters or more
Javascript and API can be hard-coded
the input will be a title which is a string of words
*/
/*
  first we neeed to create a version of the input that is all lowercase
  We will also put this lower case string into an array of every word in the title

  begin going through each member in the strArr beginning at the first member
  if the value of a member includes javascript
  put JavaScript into the editedStrArr
  if the value of the a member is the same as api
  put API into the editedStrArr
  if the value of the member is the same as web
  put Web into the editedStrArr
  if string[i] is not true for any of the above conditions go to the next step

  begin looking at each character in each member value one at a time
  if you are looking at a member and capitalizeNext is strictly equal to true
  put the capitalized version of that character into the editedStrArr
  then set the value of capitalize next to false
  if capitalizeNext is not true
  check if the value of the character is ":" or "-"
  if it is then put the value of the character into the editedStrArr
  and set the value of capitalizeNext to true
  if not, check to see if you are on the first member of the group and the first character of the first value
  if that is true, put the capitalized version of that characrer into the editedStrArr and
  set the value of capitalizeNext to false
  if not true, check to see if you are are looking at a value in the group that is not present in minorWord group
  and if you are looking at the first character in that value
  if true, put the capitalized version of that character into the editedStrArr
  if not true,
  put the character into the editedStrArr without altering the character

  also, if the value of the member includes ":" as one of it characters and
  the value of the last member in the editedStrArr is not ":"
  put ":" into the editedStrArr and
  set the value of capitalizeNext to true

  then add a space character into the editedStrArr after you have put all characters from the value
  of the member into the editedStrArr

  repeat this process for every value in the strArr group

  finally, we need to take out the space character at the end of the editStrArr and
  display the values of the array in string format one character after another
*/
function titleCase(title) {
  var strArr = title.toLowerCase().split(' ');
  var minorWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  var editedStrArr = [];
  var capitalizeNext = false;
  var outputStr = '';

  for (var i = 0; i < strArr.length; i++) {
    if (strArr[i].includes('javascript')) {
      editedStrArr.push('JavaScript');
    } else if (strArr[i] === 'api') {
      editedStrArr.push('API');
    } else if (strArr[i] === 'web') {
      editedStrArr.push('Web');
    } else {
      for (var j = 0; j < strArr[i].length; j++) {
        if (capitalizeNext === true) {
          editedStrArr.push(strArr[i][j].toUpperCase());
          capitalizeNext = false;
        } else if (strArr[i][j] === ':' || strArr[i][j] === '-') {
          editedStrArr.push(strArr[i][j]);
          capitalizeNext = true;
        } else if (i === 0 && j === 0) {
          editedStrArr.push(strArr[i][j].toUpperCase());
          capitalizeNext = false;
        } else if (j === 0 && !minorWords.includes(strArr[i])) {
          editedStrArr.push(strArr[i][j].toUpperCase());
          capitalizeNext = false;
        } else {
          editedStrArr.push(strArr[i][j]);
        }
      }
    }
    if (strArr[i].includes(':') && editedStrArr[editedStrArr.length - 1] !== ':') {
      editedStrArr.push(':');
      capitalizeNext = true;
    }
    editedStrArr.push(' ');
  }
  outputStr = editedStrArr.slice(0, -1);
  return outputStr.join('');
}
