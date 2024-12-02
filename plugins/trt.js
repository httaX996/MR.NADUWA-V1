const config = require('../config')
const {cmd , commands} = require('../command')




cmd({
    pattern: "trt",
    alias: ["translate"],
    desc: "Translate text",
    category: "utilities",
    filename: __filename
},
async (conn, mek, m, { q, reply }) => {
    try {
        let [text, lang] = q.split("|");
        if (!text || !lang) return reply("Usage: <text>|<language_code>");
        let data = await fetchJson(`${baseUrl}/api/translate?text=${encodeURIComponent(text)}&lang=${lang}`);
        reply(`Translation: ${data.translation}`);
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
