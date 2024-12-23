//============= menu command ================
const { readEnv } = require('../config')
const { cmd, commands } = require('../command')
const os = require("os")
const { runtime } = require('../lib/functions')

cmd({
    pattern: "menu",
    alias: ["list"],
    desc: "menu the bot",
    react: "📜",
    category: "main"
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let desc = `*👋 Hello ${pushname}*

*╭─「 𝙼𝚁.𝙽𝙰𝙳𝚄𝚆𝙰-𝚅2 」*
*│◈ ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}*
*│◈ ʀᴀᴍ ᴜꜱᴀɢᴇ : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(os.totalmem() / 1024 / 1024)}MB*
*│◈ ᴘʟᴀᴛꜰᴏʀᴍ : ${os.hostname()}*
*│◈ ᴠᴇʀꜱɪᴏɴ : 1.0.0*
*╰──────────●●►*

*╭╼╼╼╼╼╼╼╼╼╼*
*├ 1 • OWNER*
*├ 2 • CONVERT*
*├ 3 • AI*
*├ 4 • SEARCH*
*├ 5 • DOWNLOAD*
*├ 6 • MAIN*
*├ 7 • GROUP*
*├ 8 • FUN*
*├ 9 • TOOLS*
*├ 10 • OTHER*
*├ 10 • MOVIE*
*├ 11 • NEWS*
*╰╼╼╼╼╼╼╼╼╼╼*

_*🌟 Reply with the Number you want to select*_

> *𝙋𝙊𝙒𝙀𝙍𝘿 𝘽𝙔 𝙈𝙍.𝙣𝙖𝙙𝙪𝙬𝙖*`;

        const vv = await conn.sendMessage(from, { image: { url: "https://telegra.ph/file/6fea4e5e00bc0d9395f15.jpg" }, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        reply(`*◈╾──────OWNER COMMAND LIST──────╼◈*

╭────────●●►
│ • *restart* 
╰────────────────────●●►

⭓ *Total Commands List OWNER: 1*

> *𝙋𝙊𝙒𝙀𝙍𝘿 𝘽𝙔 𝙈𝙍.𝙉𝘼𝘿𝙐𝙒𝘼*`);
                        break;
                    case '2':
                        reply(`*◈╾──────CONVERT COMMAND LIST──────╼◈*

╭────────●●►
│ • *convert* 
╰────────────────────●●►

⭓ *Total Commands List CONVERT: 1*

> *𝙋𝙊𝙒𝙀𝙍𝘿 𝘽𝙔 𝙈𝙍.𝙉𝘼𝘿𝙐𝙎*`);
                        break;
                    case '3':
                        reply(`*◈╾──────AI COMMAND LIST──────╼◈*

╭────────●●►
│ • *ai* 
╰────────────────────●●►

⭓ *Total Commands List AI: 1*

> *𝙋𝙊𝙒𝙀𝙍𝘿 𝘽𝙔 𝙈𝙍.𝙉𝘼𝘿𝙐𝙒𝘼*`);
                        break;
                    // Add more cases as per your needs
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }
            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});

//==================== all menu command =====================
cmd({
    pattern: "allmenu",
    desc: "To get the menu.",
    react: "📜",
    category: "main",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let menu = {
            main: '',
            download: '',
            group: '',
            owner: '',
            convert: '',
            ai: '',
            tools: '',
            search: '',
            fun: '',
            voice: '',
            other: '',
            movie: '',
            news: ''
        };

        for (let i = 0; i < commands.length; i++) {
            if (commands[i].pattern && !commands[i].dontAddCommandList) {
                menu[commands[i].category] += `.${commands[i].pattern}\n`;
            }
        }

        let madeMenu = `
🧑‍💻𝙈𝙍.𝙉𝘼𝘿𝙐𝙒𝘼-𝙑2 - 𝗔𝗟𝗟 𝗠𝗘𝙉𝙐🧑‍💻

      👋 𝐇𝐄𝐋𝐋𝐎, ${pushname}!

✨ 𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝘁𝗼 𝙈𝙍.𝙉𝘼𝘿𝙐𝙒𝘼-𝙑2! ✨ 

╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ 」
│◈ 𝐑𝐔𝐍 𝐓𝐈𝐌𝐄 * ${runtime(process.uptime())}
│◈ 𝐎𝐖𝐍𝐄𝐑 𝐍𝐀𝐌𝐄 * 𝙈𝙍.𝙉𝘼𝘿𝙐𝙒𝘼
│◈ 𝐎𝐖𝐍𝐄𝐑 𝐍𝐔𝐌𝐁𝐄𝐑 * 94767073275
╰──────────●●►
╭──────────●●►
 📥 *𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.download}
╰───────────●●►
╭──────────●●►
 👾 *𝐀𝐢 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.ai}
╰───────────●●►
╭──────────●●►
 🔧 *𝐌𝐚𝐢𝐧 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.main}
╰───────────●●►
╭──────────●●►
 🎉 *𝐅𝐮𝐧 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.fun}
╰───────────●●►
╭──────────●●►
 🔄 *𝐂𝐨𝐧𝐯𝐞𝐫𝐭 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.convert}
╰───────────●●►
╭──────────●●►
 🔍 *𝐒𝐞𝐚𝐫𝐜𝐡 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.search}
╰───────────●●►
╭──────────●●►
 👥 *𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.group}
╰───────────●●►
╭──────────●●►
 🔒 *𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.owner}
╰───────────●●►
╭──────────●●►
 ⚙️ *𝐎𝐭𝐡𝐞𝐫 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.other}
╰───────────●●►
╭──────────●●►
 🛠️ *𝐓𝐨𝐨𝐥𝐬 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.tools}
╰───────────●●►
╭──────────●●►
 🍿 *𝐌𝐨𝐯𝐢𝐞 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.movie}
╰───────────●●►
╭──────────●●►
 📢 *𝐍𝐞𝐰𝐬 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.news}
╰───────────●●►
    `;
        await conn.sendMessage(from, { text: madeMenu }, { quoted: mek });
    } catch (e) {
        console.error(e);
        reply('An error occurred while fetching the menu.');
    }
});
