/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  var initialsOfPerson = person.firstName.charAt(0) + person.lastName.charAt(0);
  return initialsOfPerson;
}
