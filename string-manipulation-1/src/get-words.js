/* exported getWords */
/*
create storage for list of words that will be output
create storage for current word
look to see if input is empty and if it is return an empty storage list
if not continue
look at each character one at a time
if the current character is not a space
add it to the current word
if it is a space put the current word into the storage container for the list of words
then clear the current word
add final word to the list of words
display the list of words
*/
function getWords(string) {
  var listOfWords = [];
  var currentWord = '';
  if (string === '') {
    return [];
  }
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      currentWord += string[i];
    } else {
      listOfWords.push(currentWord);
      currentWord = '';
    }
  }
  listOfWords.push(currentWord);
  return listOfWords;
}
