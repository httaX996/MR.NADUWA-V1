const { cmd, commands } = require('../command');
const { fetchJson } = require('../lib/functions');
const yts = require('yt-search');
const domain = `https://manu-ofc-api-site-6bfcbe0e18f6.herokuapp.com`;
const api_key = `Manul-Ofc-Song-Dl-Key-9`;

cmd({
    pattern: "song",
    alias: ["audio"],
    desc: 'Download Song / Video',
    use: '.play Title',
    react: "🎧",
    category: 'download',
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, args, q, reply }) => {
    try {
        if (!q) return reply('Please provide a title.');

        const search = await yts(q);
        const data = search.videos[0];
        if (!data) return reply('No results found.');

        const desc = `*🖤🎵 YT Downloader 🎵🖤*\n\n` +
            `> *➤ Title:* ${data.title}\n` +
            `> *➤ Views:* ${data.views}\n` +
            `> *➤ Description:* ${data.description}\n` +
            `> *➤ Time:* ${data.timestamp}\n` +
            `> *➤ Ago:* ${data.ago}\n\n` +
            `*Reply to this message with an option:*\n` +
            `1. Audio 🎧\n2. Document 🗂️\n\n` +
            `> *Powered By - : ©KAVI EXE 🎶*`;

        const sentMessage = await conn.sendMessage(
            from,
            { image: { url: data.thumbnail }, caption: desc },
            { quoted: mek }
        );

        conn.ev.once('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();
            const isReplyToBot = msg.message.extendedTextMessage.contextInfo?.stanzaId === sentMessage.key.id;

            if (isReplyToBot) {
                try {
                    let response;
                    switch (selectedOption) {
                        case '1':
                            response = await fetchJson(`${domain}/api/ytmp3?videoUrl=${data.url}&apikey=${api_key}`);
                            if (!response?.data?.dl_link) throw new Error('Download link not found.');
                            await conn.sendMessage(
                                from,
                                { audio: { url: response.data.dl_link }, mimetype: "audio/mpeg" },
                                { quoted: mek }
                            );
                            break;

                        case '2':
                            response = await fetchJson(`${domain}/api/ytmp3?videoUrl=${data.url}&apikey=${api_key}`);
                            if (!response?.data?.dl_link) throw new Error('Download link not found.');
                            await conn.sendMessage(
                                from,
                                {
                                    document: { url: response.data.dl_link },
                                    mimetype: "audio/mpeg",
                                    fileName: `${data.title}.mp3`,
                                },
                                { quoted: mek }
                            );
                            break;

                        default:
                            reply('Invalid option. Please select a valid option 💗');
                    }
                } catch (err) {
                    console.error(err);
                    reply('Failed to process your request.');
                }
            }
        });
    } catch (err) {
        console.error(err);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
        reply('An error occurred while processing your request.');
    }
});
