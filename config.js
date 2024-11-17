const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "tJxkRbYK#u16Ls9u0vq6nbvflxlaBiWHMar_ewY4v2z8qhwd0Lp4",
MONGODB: process.env.MONGODB || "mongodb://mongo:mvUcSsatPnZFIrdAhxAkDDrAFKpTNKeb@junction.proxy.rlwy.net:53702",
};
