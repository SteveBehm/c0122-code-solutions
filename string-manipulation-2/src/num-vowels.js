/* exported numVowels */
/*
create a storage container for the final number output to be stored in
go through each chracter in the input group
make each character its lower case version of itself
go through each character in the group
if any of the chracters in the group are the same as
"a, e, i, o, u"
add 1 to the final storage container
when there is not another character after the current character stop
display the final output
*/
function numVowels(string) {
  var numOfVowels = 0;
  var lowerCaseStr = string.toLowerCase();
  for (var i = 0; i < lowerCaseStr.length; i++) {
    if (lowerCaseStr[i] === 'a' || lowerCaseStr[i] === 'e' || lowerCaseStr[i] === 'i' || lowerCaseStr[i] === 'o' || lowerCaseStr[i] === 'u') {
      numOfVowels++;
    }
  }
  return numOfVowels;
}
