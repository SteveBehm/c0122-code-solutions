/* exported isPalindromic */
function isPalindromic(string) {
// Lowercase the string and use the RegExp to remove unwanted
// characters from it as well.
  var re = /[\W_]/g;
  var lowCaseStr = string.toLowerCase().replace(re, '');
  // above makes the string lowercase and takes out any non-alphanumeric
  // characters and return the string.
  var reverseStr = lowCaseStr.split('').reverse().join('');
  // split method takes each character and places them into an array
  // where each character is a separate value in the array.
  // reverse method reverses the characters in the array.
  // join method takes the characters in the array and joins them
  // together to make a string.
  return lowCaseStr === reverseStr;
  // check to see if the original lower case string that wasn't
  // reversed yet with the reversed string. If they are strictly
  // equal then there is a palindrome.
}
