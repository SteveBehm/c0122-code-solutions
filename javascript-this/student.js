/* exported student */
var student = {
  firstName: 'Steve',
  lastName: 'Behm',
  subject: 'the brain',
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
  getIntroduction: function () {
    return 'Hello, my name is ' + this.getFullName() + ' and I am studying ' + this.subject + '.';
  }
};
