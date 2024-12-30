const { cmd } = require('../command');
const { fetchJson } = require('../lib/functions');

const apilink = 'https://www.dark-yasiya-api.site'; // API LINK (DO NOT CHANGE THIS!!)

// TikTok Downloader
cmd({
    pattern: "tiktok",
    alias: ["ttdl", "ttdown"],
    react: "🎵",
    desc: "Download TikTok video",
    category: "download",
    use: '.tiktok <link>',
    filename: __filename
},
async(conn, mek, m, { from, quoted, reply, q }) => {
    try {
        if (!q) return await reply("Please provide a TikTok video link!");
        const tt_info = await fetchJson(`${apilink}/download/tiktok?url=${q}`);
        if (!tt_info.result) return await reply("Failed to fetch TikTok video!");

        const msg = `
🎵 *TIKTOK DOWNLOADER* 🎵
        
*Title* - ${tt_info.result.title}
*Author* - ${tt_info.result.author}
*Duration* - ${tt_info.result.duration} seconds

`;

        await conn.sendMessage(from, { image: { url: tt_info.result.thumbnail }, caption: msg }, { quoted: mek });
        await conn.sendMessage(from, { video: { url: tt_info.result.download }, mimetype: "video/mp4" }, { quoted: mek });
    } catch (error) {
        console.log(error);
        reply(error);
    }
});

// Facebook Downloader
cmd({
    pattern: "facebook",
    alias: ["fb", "fbdown"],
    react: "📹",
    desc: "Download Facebook video",
    category: "download",
    use: '.facebook <link>',
    filename: __filename
},
async(conn, mek, m, { from, quoted, reply, q }) => {
    try {
        if (!q) return await reply("Please provide a Facebook video link!");
        const fb_info = await fetchJson(`${apilink}/download/facebook?url=${q}`);
        if (!fb_info.result) return await reply("Failed to fetch Facebook video!");

        const msg = `
📹 *FACEBOOK DOWNLOADER* 📹

*Title* - ${fb_info.result.title || 'N/A'}
*Size* - ${fb_info.result.size || 'Unknown'}

`;

        await conn.sendMessage(from, { video: { url: fb_info.result.download }, mimetype: "video/mp4" }, { quoted: mek });
    } catch (error) {
        console.log(error);
        reply(error);
    }
});

// MediaFire Downloader
cmd({
    pattern: "mediafire",
    alias: ["mf", "mfdown"],
    react: "📦",
    desc: "Download MediaFire file",
    category: "download",
    use: '.mediafire <link>',
    filename: __filename
},
async(conn, mek, m, { from, quoted, reply, q }) => {
    try {
        if (!q) return await reply("Please provide a MediaFire link!");
        const mf_info = await fetchJson(`${apilink}/download/mediafire?url=${q}`);
        if (!mf_info.result) return await reply("Failed to fetch MediaFire file!");

        const msg = `
📦 *MEDIAFIRE DOWNLOADER* 📦

*Filename* - ${mf_info.result.filename}
*Size* - ${mf_info.result.size}

`;

        await conn.sendMessage(from, { document: { url: mf_info.result.download }, mimetype: mf_info.result.mimetype, fileName: mf_info.result.filename }, { quoted: mek });
    } catch (error) {
        console.log(error);
        reply(error);
    }
});
