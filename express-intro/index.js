const express = require('express');
const appObj = express();

appObj.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
