const { cmd } = require('../command');
const ytdl = require('ytdl-core');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Audio Downloader
cmd({
    pattern: "audio",
    alias: ["audiodl", "audiodown"],
    react: "🎧",
    desc: "Download audio from a YouTube link",
    category: "download",
    use: '.audio <link>',
    filename: __filename
},
async (conn, mek, m, { from, quoted, reply, q }) => {
    try {
        if (!q) return await reply("Please provide a YouTube video link!");
        
        if (!ytdl.validateURL(q)) return await reply("Invalid YouTube link!");

        const info = await ytdl.getInfo(q);
        const audioFormat = ytdl.chooseFormat(info.formats, { quality: 'highestaudio' });
        
        const msg = `
🎧 *AUDIO DOWNLOADER* 🎧

*Title* - ${info.videoDetails.title}
*Duration* - ${Math.floor(info.videoDetails.lengthSeconds / 60)}:${info.videoDetails.lengthSeconds % 60} minutes

`;

        // Send details
        await conn.sendMessage(from, { text: msg }, { quoted: mek });

        // Stream and send audio
        const audioStream = ytdl(q, { filter: 'audioonly' });
        const filename = `${info.videoDetails.title}.mp3`;
        const filePath = path.join(__dirname, filename);

        // Save and send audio
        const writeStream = fs.createWriteStream(filePath);
        audioStream.pipe(writeStream);

        writeStream.on('finish', async () => {
            await conn.sendMessage(from, { audio: fs.createReadStream(filePath), mimetype: 'audio/mpeg' }, { quoted: mek });
            fs.unlinkSync(filePath); // Clean up file
        });
    } catch (error) {
        console.error("Error in audio downloader:", error);
        await reply("An error occurred while fetching the audio. Please try again later.");
    }
});

// Video Downloader
cmd({
    pattern: "video",
    alias: ["viddl", "viddown"],
    react: "🎥",
    desc: "Download video from YouTube link",
    category: "download",
    use: '.video <link>',
    filename: __filename
},
async (conn, mek, m, { from, quoted, reply, q }) => {
    try {
        if (!q) return await reply("Please provide a YouTube video link!");
        
        if (!ytdl.validateURL(q)) return await reply("Invalid YouTube link!");

        const info = await ytdl.getInfo(q);
        const videoFormat = ytdl.chooseFormat(info.formats, { quality: 'highestvideo' });

        const msg = `
🎥 *VIDEO DOWNLOADER* 🎥

*Title* - ${info.videoDetails.title}
*Duration* - ${Math.floor(info.videoDetails.lengthSeconds / 60)}:${info.videoDetails.lengthSeconds % 60} minutes

`;

        // Send details
        await conn.sendMessage(from, { text: msg }, { quoted: mek });

        // Stream and send video
        const videoStream = ytdl(q, { format: videoFormat });
        const filename = `${info.videoDetails.title}.mp4`;
        const filePath = path.join(__dirname, filename);

        // Save and send video
        const writeStream = fs.createWriteStream(filePath);
        videoStream.pipe(writeStream);

        writeStream.on('finish', async () => {
            await conn.sendMessage(from, { video: fs.createReadStream(filePath), mimetype: 'video/mp4' }, { quoted: mek });
            fs.unlinkSync(filePath); // Clean up file
        });
    } catch (error) {
        console.error("Error in video downloader:", error);
        await reply("An error occurred while fetching the video. Please try again later.");
    }
});
