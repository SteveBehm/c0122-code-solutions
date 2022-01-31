var student = {
  firstName: 'Steve',
  lastName: 'Behm',
  age: 30
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of full name:', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'physical therapist';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'honda',
  model: 'accord',
  year: '2004'
};

vehicle['color'] = 'gold';
vehicle['isConvertible'] = false;
console.log('value of the ["color"]:', vehicle.color);
console.log('value of ["isConvertible"]:', vehicle.isConvertible);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Randall',
  type: 'dog'
};

delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
