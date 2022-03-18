const fs = require('fs');
const file = process.argv[2];
const copyTo = process.argv[3];

fs.readFile(file, 'utf-8', (err, data) => {
  // checking if there was an error while reading the file
  if (err) {
    console.error(err); // write the error to the process' stderr (standard error)
    process.exit(1); // forcibly quit with a failure code (not 0)
  } else {
    fs.writeFile(copyTo, data.toString(), 'utf8', err => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
    });
  }
});
