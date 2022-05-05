/* exported truncate */
/*
begin looking at the input given
we have a group of characters and a number
begin looking at the first character in the group
go to the next character as many time as the input number given
create a new storage container
place all character that came previously in the group into the new storage
look at the new storage container
go to the last character in that group
add three more characters after that are each a period
store that new group of characters in a new container
display the newest container
*/
// function truncate(length, string) {
//   var shortStr = string.substring(0, length);
//   var truncatedStr = shortStr + '...';
//   return truncatedStr;
// }

function truncate(length, string) {
  let outputStr = '';
  for (let i = 0; i < length && i < string.length; i++) {
    outputStr += string[i];
  }
  return outputStr + '...';
}
