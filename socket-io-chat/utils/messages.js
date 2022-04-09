// help us get the time
const moment = require('moment');

// make the messages formatted as an object
function formatMessage(username, text) {
  return {
    username,
    text,
    time: moment().format('h:mm a')
  };
}

module.exports = formatMessage;
