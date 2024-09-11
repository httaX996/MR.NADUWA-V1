const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "0QxEjLhJ#tX5JG5O3wsjYpX6sXFr09pYpNKGPWQuEoDp3WImN4Ds",
MONGODB: process.env.MONGODB || "mongodb://mongo:mvUcSsatPnZFIrdAhxAkDDrAFKpTNKeb@junction.proxy.rlwy.net:53702",
};
