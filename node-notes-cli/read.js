const fs = require('fs');
const userInput = process.argv[2];

module.exports.read = () => {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    // the data.json file is still in the json string format
    // parsing the data will and storing it in an object will allow
    // me to work with the data as the object parsedData
    const parsedData = JSON.parse(data);
    if (userInput.toLowerCase() === 'read') {
      for (const property in parsedData.notes) {
        // we want to display each property and its value
        console.log(`${property}: ${parsedData.notes[property]}`);
      }
    }
  });
};
