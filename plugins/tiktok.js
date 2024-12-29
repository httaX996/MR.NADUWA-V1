const { cmd } = require('../command'); // Command handler
const axios = require('axios'); // Ensure axios is installed: npm install axios

const apiBaseURL = 'https://api.davidcyriltech.my.id';

cmd({
    pattern: "tiktok",
    alias: ["tt", "ttdown"],
    desc: "Download TikTok videos with or without watermark and audio",
    category: "download",
    use: ".tiktok <url>",
    filename: __filename
}, async (conn, mek, m, { from, quoted, reply, q }) => {
    try {
        // Validate input
        if (!q) return await reply("❌ Please provide a TikTok URL.");
        if (!q.includes('tiktok.com')) return await reply("❌ Invalid URL! Please provide a valid TikTok link.");

        // Fetch TikTok data from API
        const { data } = await axios.get(`${apiBaseURL}?url=${q}`);
        
        // Handle API errors
        if (data.status !== "success" || !data.result) {
            return await reply("❌ Failed to retrieve TikTok video. Please try again later.");
        }

        const { title, author, duration, views, cover, wm_video, no_wm_video, audio } = data.result;

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
        if (wm_video) {
            await conn.sendMessage(from, {
                video: { url: wm_video },
                mimetype: "video/mp4",
                caption: `${title || 'TikTok Video'}\n\n*WATERMARK VIDEO ✅*`
            }, { quoted: mek });
        }

        // Send no-watermark video
        if (no_wm_video) {
            await conn.sendMessage(from, {
                video: { url: no_wm_video },
                mimetype: "video/mp4",
                caption: `${title || 'TikTok Video'}\n\n*NO WATERMARK VIDEO ✅*`
            }, { quoted: mek });
        }

        // Send audio
        if (audio) {
            await conn.sendMessage(from, {
                audio: { url: audio },
                mimetype: "audio/mpeg",
                ptt: false // Set to true if you want to send it as a voice note
            }, { quoted: mek });
        }
    } catch (error) {
        console.error("Error occurred:", error.message);
        await reply("❌ An error occurred while processing your request. Please try again later.");
    }
});
