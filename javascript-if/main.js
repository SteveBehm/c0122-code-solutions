/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isUnderFive(number) {
  if (number < 5) {
    return true;
  }
}

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  }
}

function startsWithJ(string) {
  if (string.charAt(0) === 'J') {
    return true;
  }
}

function isOldEnoughToDrink(person) {
  if (person.age < 21) {
    return false;
  }
}

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  if (person.age >= 0) {
    return false;
  }
}

function categorizeAcidity(pH) {
  if (pH > 7) {
    return 'base';
  } else if (pH < 7) {
    return 'acid';
  } else if (pH === 7) {
    return 'neutral';
  } else {
    return 'inavlid pH level';
  }
}

function introduceWarnerBro(name) {
  if (name === 'yakko' || name === 'wakko') {
    return "We're the warner brothers!";
  } else if (name === 'dot') {
    return "I'm cute~";
  } else {
    return 'Goodnight everybody!';
  }
}
