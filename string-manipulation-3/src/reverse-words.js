/* exported reverseWords */
/*
first split the string based on space characters and put them into an array
use the map method to perform more methods to each individual value in the array
each individual value will be split into an array of each character
then reversed in order, and finally joined back into a string
Now we have an array of reversed string values so we have to
join the values into a string with spaces between values
display the string
*/
function reverseWords(string) {
  var reversedWords = string.split(' ').map(word => word.split('').reverse().join(''));
  return reversedWords.join(' ');
}
