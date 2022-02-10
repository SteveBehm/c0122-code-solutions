/* exported firstChars */
/*
create a storage container for the final output
begin looking at characters in the given string input
start at the first characrter
go to the next character as many time as the value of the length input
store all the previous characters up to that point in the final output container
display the final output container
*/
function firstChars(length, string) {
  var finalStr = '';
  finalStr = string.slice(0, length);
  return finalStr;
}
