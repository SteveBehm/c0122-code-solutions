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
