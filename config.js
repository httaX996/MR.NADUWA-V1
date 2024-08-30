const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "tBhQFJaa#fFQoi7gGFc4ziI6nSSB-ObQXEzhEEFGb6eNIvX-Qbzs",
MONGODB: process.env.MONGODB || "mongodb://mongo:HAODxgQcEsjjUWFAdOwxhJQYXuIBCWMU@junction.proxy.rlwy.net:40219",
};
