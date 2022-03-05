/* exported isPalindromic */
/*
  Use the split method on the string to create substrings within an array
  create an empty array storage container for a string that will have no spaces
  loop through the array that has the split string in it
  if splitStr[i] is not strictly equal to a space
  push the value splitStr[i] into the no spaces string array
  this string array will now not have any spaces in it, just the
  characters from the split string array

  Now we need to compare the characters in the no-spaces string array
  with the reversed version of that array.
  It will be easier to compare if we also turn those arrays back into strings
  If the two strings are strictly equal to each other then they are a palindrome
  return true
  and if they are not strictly equal
  return false
*/
function isPalindromic(string) {
  var strArr = string.split('');
  var noSpacesArr = [];

  for (var i = 0; i < strArr.length; i++) {
    if (strArr[i] !== ' ') {
      noSpacesArr.push(strArr[i]);
    }
  }

  var compareArr = noSpacesArr.slice(0);
  if (noSpacesArr.reverse().join('') === compareArr.join('')) {
    return true;
  }
  return false;
}
