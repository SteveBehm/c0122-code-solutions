var width = 5;
var height = 10;
var bill = 7;
var payment = 10;
var quizzes = 96;
var midterm = 98;
var final = 100;
var firstName = 'Steve';
var lastName = 'Behm';
var pH = 8.0;
var headCount = 18;
var motto = 'Steve Behm';

var area = width * height;
console.log('value of area: ', area);
console.log('type of area:', typeof area);

var change = payment - bill;
console.log('value of change: ', change);
console.log('type of change:', typeof change);

var grade = (quizzes + midterm + final) / 3;
console.log('value of grade: ', grade);
console.log('type of grade:', typeof grade);

var fullName = firstName + ' ' + lastName;
console.log('value of fullName:', fullName);
console.log('type of fullName:', typeof fullName);

var isAcidic = pH < 7.0;
console.log('value of isAcidic:', isAcidic);
console.log('type of isAcidic:', typeof isAcidic);

var isSparta = headCount === 300;
console.log('value of isSparta:', isSparta);
console.log('type of isSparta:', typeof isSparta);

motto = motto + ' is the GOAT';
console.log('value of motto:', motto);
console.log('type of motto:', typeof motto);
