const fs = require('fs');
const data = (Math.random()) + '\n';

fs.writeFile('random.txt', data.toString(), 'utf8', err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
