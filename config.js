const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "xdhwTQRK#w0yKmy_6dcLiyrk3hIaYKj6TKvuziEZkdDNZhcw_Rsk",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/6fea4e5e00bc0d9395f15.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "🤖𝗛𝗘𝗬 𝗜 𝗔𝗠 𝗠𝗥.𝗡𝗔𝗗𝗨𝗪𝗔-𝗩1 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗕𝗢𝗧 🤖𝙳𝙴𝙿𝙻𝚈 𝙱𝚈 𝙼𝚁.𝙽𝙰𝙳𝚄𝚆𝙰☀",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "private",
    
};
