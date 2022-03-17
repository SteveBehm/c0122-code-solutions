const fs = require('fs');
const userInput = process.argv[2];

fs.readFile('data.json', 'utf8', (err, data) => {
  const parsedData = JSON.parse(data);
  if (userInput.toLowerCase() === 'read') {
    for (const property in parsedData.notes) {
      console.log(`${property}: ${parsedData.notes[property]}`);
    }
  }
  if (err) {
    console.error(err);
    process.exit(1);
  }
}
);
