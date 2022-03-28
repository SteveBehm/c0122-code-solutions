/* exported Student */

class Student {
  constructor(firstName, lastName, subject) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.subject = subject;
  }

  getFullName() {
    const { firstName, lastName } = this;
    return `${firstName} ${lastName}`;
  }

  getIntroduction() {
    const fullName = this.getFullName();
    const { subject } = this;
    return `Hello, my name is ${fullName} and I am studying ${subject}.`;
  }
}

// Student.prototype.getFullName = function () {
//   const { firstName, lastName } = this;
//   return `${firstName} ${lastName}`;
// };

// Student.prototype.getIntroduction = function () {
//   const { subject } = this;
//   const fullName = this.getFullName();
//   return `Hello, my name is ${fullName} and I am studying ${subject}.`;
// };
