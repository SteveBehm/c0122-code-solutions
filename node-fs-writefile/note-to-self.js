const fs = require('fs');
const userInput = process.argv[2] + '\n';

fs.writeFile('note.txt', userInput.toString(), 'utf8', err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
