const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/6fea4e5e00bc0d9395f15.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "
    ```PREFIX    : .
MENU      : not-yet
VERSION   : 1.0.0
PLUGINS   : 5
E-PLUGINS :not-yet
SUDO      : 
AUTO READ MSG    : ❎-not-yet
AUTO STATUS VIEW : ✅
AUTO REJECT CALL : ❎-not-yet
ALWAYS ONLINE    : ✅
ANTI DELETE MSG  : ❎-not-yet


Channel : no-yet

Plugins : no-yet

FAQ : no-yet```

*ReadMore :* - not-yet",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
