const express = require('express');
const appObj = express();

appObj.use(function (req, res) {
  res.send('yes');
});

appObj.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('The server is now listening.');
});
