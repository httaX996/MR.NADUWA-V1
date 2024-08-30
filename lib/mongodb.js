const mongoose = require('mongoose');
const config = require('../config');
const EnvVar = require('./mongodbenv');

const defaultEnvVariables = [
    { key: 'ALIVE_IMG', value: 'https://telegra.ph/file/c43293fc777ff3a42d5f3.jpg' },
    { key: 'ALIVE_MSG', value: '🤖𝗛𝗘𝗬 𝗜 𝗔𝗠 𝗠𝗥.𝗡𝗔𝗗𝗨𝗪𝗔-𝗩1 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗕𝗢𝗧 🤖𝙳𝙴𝙿𝙻𝚈 𝙱𝚈 𝙼𝚁.𝙽𝙰𝙳𝚄𝚆𝙰☀' },
    { key: 'PREFIX', value: '.' },
    { key: 'AUTO_READ_STATUS', value: 'false' },
    { key: 'MODE', value: 'public' },
    { key: 'AUTO_VOICE', value: 'true' },
    { key: 'AUTO_STICKER', value: 'true' },
    { key: 'AUTO_REPLY', value: 'true' },
    

];

// MongoDB connection function
const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB);
        console.log('🛜 MongoDB Connected ✅');

        // Check and create default environment variables
        for (const envVar of defaultEnvVariables) {
            const existingVar = await EnvVar.findOne({ key: envVar.key });

            if (!existingVar) {
                // Create new environment variable with default value
                await EnvVar.create(envVar);
                console.log(`➕ Created default env var: ${envVar.key}`);
            }
        }

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
