const fs = require('fs');

// accessing the name of the file that
// the user passed via the command line
const file = process.argv[2];

// asynchronously reading the conetents of the file
// and encoding it using the utf8 character set
fs.readFile(file, 'utf-8', (err, data) => {
  // checking if there was an error while reading the file
  if (err) {
    console.error(err); // write the error to the process' stderr (standard error)
    process.exit(1); // forcibly quit with a failure code (not 0)
  }
  console.log(data); // otherwise print the data to stdout (standard out)
});
