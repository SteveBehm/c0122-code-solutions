/* exported isLowerCased */
/*
look at each group of characters given starting at the beginning
is that character strictly the same as that character's lower case version?
if yes move to the next character and repeat the previous step
if no don't go to the next character and display false.
If yes, repeat character comparison until there are no more characters after the current character
if there are no more characters and all have the same lowercase casing version of themselves return true
display true
*/
function isLowerCased(word) {
  if (word === word.toLowerCase()) {
    return true;
  }
  return false;
}
