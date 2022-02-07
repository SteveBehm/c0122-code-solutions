/* exported isUpperCased */
/*
look at each group of characters given starting at the beginning
is that character strictly the same as that character capitalized?
if yes move to the next character and repeat the previous step
if no don't go to the next character and display false.
If yes, repeat character comparison until there are no more characters after the current character
if there are no more characters and all are the same as the capitalized version of themselves return true
display true
*/
function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  }
  return false;
}
