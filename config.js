const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/04f33ed3a84d24104a9ef.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "HELLOW I AM MR.NADUWA ,I AM ALIVE NOW",
};
