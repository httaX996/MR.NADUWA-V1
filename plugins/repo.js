const { cmd, commands } = require('../command');
const config = require('../config');
// repo info
cmd({
    pattern: "alive",
    alias: ["sc", "script", "info"],
    desc: "Info about the bot repository",
    category: "main",
    react: "👨‍💻",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `*Hello there MR.NADUWA-V1 User! 💚* 

> Simple , Straight Forward But Loaded With Features 💚 Meet MR.NADUWA-V1 WhatsApp Bot.

*Thanks for using MR.NADUWA-V1 💚* 

> Don't forget to frok the repo ⤵️

https://github.com/JawadYTX/KHAN-AI`;

        await conn.sendMessage(from, { image: { url: `https://files.catbox.moe/x3bdmi.jpg` }, caption: dec, contextInfo: { mentionedJid: [m.sender], forwardingScore: 999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '', newsletterName: 'JawadTechX', serverMessageId: 143 } } }, { quoted: mek });

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/JawadYTX/KHAN-DATA/raw/refs/heads/main/autovoice/repo.m4a' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

