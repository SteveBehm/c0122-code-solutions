function graduate(credential) {
  return function (fullName) {
    return `${fullName} ${credential}`;
  };
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

medicalSchool('Dan Abramov');
console.log('medical school:', medicalSchool('Dan Abramov'));

lawSchool('Ryan Florence');
console.log('lawSchool:', lawSchool('Ryan Florence'));

// ES6 version
const grad = credential => fullName => `${fullName}, ${credential}`;

const med = grad('M.D.');
const law = grad('Esq.');

const lisa = med('Lisa Simpson');
const bob = law('Bob Williams');

console.log(lisa);
console.log(bob);
