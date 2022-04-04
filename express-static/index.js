const express = require('express');
const app = express();
const path = require('path');

const newPath = path.join(__dirname, 'public');
console.log('newPath:', newPath);

const servePublicFiles = express.static(newPath);

app.use(servePublicFiles);

app.listen(3000, () => {
  console.log('listening on port 3000');
});
