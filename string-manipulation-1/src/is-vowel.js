/* exported isVowel */
/*
create a container that houses all the vowels in the alphabet
the container should also have the upper case version of the vowels
look at the input given
compare the character given to each member in the storage container.
you will have seen each member once there is no new member after the previous
if the character is the exact same as at least one of the members in the container
return true and display true
if the character doesn't match any of the members of the group
return false and display false
*/
// function isVowel(char) {
//   var vowels = ['a', 'e', 'i', 'o', 'u'];
//   for (var i = 0; i < vowels.length; i++) {
//     if (vowels[i] === char || vowels[i].toUpperCase() === char) {
//       return true;
//     }
//   }
//   return false;
// }

function isVowel(char) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < vowels.length; i++) {
    if (vowels[i] === char.toLowerCase()) {
      return true;
    }
  }
  return false;
}
