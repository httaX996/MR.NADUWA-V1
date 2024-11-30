const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "film",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

    if (!text) return m.reply('Silakan masukkan nomor halaman (1-2239).');
    
    const page = parseInt(text);
    if (isNaN(page) || page < 1 || page > 2239) {
        return m.reply('Halaman harus antara 1 dan 2239.');
    }
    
    try {
        const response = await fetch(`https://endpoint.web.id/search/film?key=${global.key}&page=${page}`);
        const data = await response.json();

        if (data.status) {
            const films = data.result;
            const randomIndex = Math.floor(Math.random() * films.length);
            const selectedFilm = films[randomIndex];

            const caption = `*Title:* ${selectedFilm.title}\n` +
                            `*Rating:* ${selectedFilm.rating}\n` +
                            `*Quality:* ${selectedFilm.quality}\n` +
                            `*Type:* ${selectedFilm.type}\n` +
                            `*Link:* [Tonton di sini](${selectedFilm.link})`;

            supunfernando.sendMessage(m.chat, { image: { url: selectedFilm.poster }, caption: caption }, { quoted: m });
        } else {
            m.reply('Tidak ada hasil ditemukan.');
        }
    } catch (error) {
        console.error(error);
        m.reply('Terjadi kesalahan saat mengambil data. Silakan coba lagi nanti.');
    }
catch(e){
console.log(e)
reply(`${e}`)

}

})

