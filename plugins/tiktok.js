const { cmd } = require('../command'); // Adjust this based on your project structure
const { fetchJson } = require('../lib/functions'); // Utility for making API requests

// Replace this with your actual API URL
const apilink = 'https://api.davidcyriltech.my.id/download/tiktok?url=';

cmd({
    pattern: "tiktok",
    alias: ["tt", "ttdown"],
    react: "",
    desc: "Download TikTok videos with or without watermark and audio",
    category: "download",
    use: '.tiktok <url>',
    filename: __filename
}, async (conn, mek, m, { from, quoted, reply, q }) => {
    try {
        // Check if URL is provided
        if (!q) {
            return await reply("❌ Please provide a TikTok video URL.");
        }

        // Validate TikTok URL
        if (!q.includes('tiktok.com')) {
            return await reply("❌ Invalid URL! Please provide a valid TikTok link.");
        }

        // Fetch video details from the API
        const tiktokData = await fetchJson(`${apilink}/download/tiktok?url=${q}`);
        if (!tiktokData || !tiktokData.result) {
            return await reply("❌ Failed to retrieve TikTok video. Please try again later.");
        }

        const { title, author, duration, views, cover, wmVideo, hdVideo, sound } = tiktokData.result;

        // Prepare details message
        const detailsMessage = `
*TIKTOK VIDEO DOWNLOADER*

• *Title*: ${title || 'N/A'}
• *Author*: ${author || 'N/A'}
• *Duration*: ${duration || 'N/A'}
• *Views*: ${views || 'N/A'}
        `;

        // Send video details and thumbnail
        await conn.sendMessage(from, { image: { url: cover || '' }, caption: detailsMessage }, { quoted: mek });

        // Send watermark video
        if (wmVideo) {
            await conn.sendMessage(from, {
                video: { url: wmVideo },
                mimetype: "video/mp4",
                caption: `${title || 'TikTok Video'}\n\n*WATERMARK VIDEO ✅*`
            }, { quoted: mek });
        }

        // Send HD (no watermark) video
        if (hdVideo) {
            await conn.sendMessage(from, {
                video: { url: hdVideo },
                mimetype: "video/mp4",
                caption: `${title || 'TikTok Video'}\n\n*NO WATERMARK VIDEO ✅*`
            }, { quoted: mek });
        }

        // Send audio
        if (sound) {
            await conn.sendMessage(from, {
                audio: { url: sound },
                mimetype: "audio/mpeg",
                ptt: false // Set true if you want it as a voice note
            }, { quoted: mek });
        }
    } catch (error) {
        console.error(error);
        await reply("❌ An error occurred while processing your request. Please try again later.");
    }
});
