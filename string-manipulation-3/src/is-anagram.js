/* exported isAnagram */

function isAnagram(firstString, secondString) {
  // first we need to take out the space and make both strings lowercase
  var str1 = firstString.replaceAll(' ', '').toLowerCase();
  var str2 = secondString.replaceAll(' ', '').toLowerCase();

  // now we need to split the strings characters up to individual values
  // in an array. split() method

  // then we can sort the array, which will put them into alphabetical order
  // if the string are anagrams the two arrays will be the same.
  // sort() method

  // then we need to take the characters out of the arrays and join them
  // together to make the strings again. join() method.

  var string1 = str1.split('').sort().join('');
  var string2 = str2.split('').sort().join('');

  // finally, we should have two string that we can compare
  // if they are strictly equal to each other, they are anagrams
  // otherwise they are not.

  if (string1 === string2) {
    return true;
  } else {
    return false;
  }
}
