const { cmd, commands } = require('../command');
const config = require('../config');
const os = require('os');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, fetchJson , runtime ,sleep } = require('../lib/functions')

cmd({
    pattern: "panel",
    alias: ["list"],
    desc: "menu the bot",
    react: "🇱🇰",
    category: "main"
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let desc = `*🧑‍💻 හායි ${pushname}, I AM MR.NADUWA-V1 WA BOT 🧑‍💻*

*Command Panel 💱*

*⏳ RAM USAGE -*${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
*⏰ UPTIME -* ${runtime(process.uptime())}

LIST OF MENU ❇️
*────────────────────────────────*
*| ➤ 1 || OWNER MENU*
*| ➤ 2 || CONVERT MENU*
*| ➤ 3 || AI MENU*
*| ➤ 4 || DOWNLOAD MENU*
*| ➤ 5 || GROUP MENU*
*| ➤ 6 || ANIME MENU*
*| ➤ 7 || FUN MENU*
*| ➤ 8 || NEWS MENU*
*| ➤ 9 || OTHER MENU*
*────────────────────────────────*

_🔢 Reply The Number That You Want_

> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ.ɴᴀᴅᴜᴡᴀ-ᴠ1`;

                  // Sending the image with caption
          const vv = await conn.sendMessage(from, {


          text: desc,
          contextInfo: {

          forwardingScore: 0,
          isForwarded: false,
          forwardedNewsletterMessageInfo: {
          newsletterName: '𝗠𝗥.𝗡𝗔𝗗𝗨𝗪𝗔-𝗩1📌',
          newsletterJid: "",
          },
          externalAdReply: {
              title: `𝗠𝗥.𝗡𝗔𝗗𝗨𝗪𝗔  |   𝗩1📌`,
              body: `🤖 ᴍᴀᴅᴇ ʙʏ ᴅᴀʀᴋ ᴀʀᴏᴏᴡ ᴛᴇᴀᴍ  🤖`,
              thumbnailUrl: `https://telegra.ph/file/6fea4e5e00bc0d9395f15.jpg`,
              sourceUrl: ``,
              
              mediaType: 1,
              renderLargerThumbnail: true
              }
                  }
              }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        reply(`*＿＿＿＿＿＿＿＿＿＿[ Owner Menu 🧑🏻‍💻 ]＿＿＿＿＿＿＿＿＿＿＿*

| ➤ .restart
| ➤ .shutdown
| ➤ .broadcast
| ➤ .setpp
| ➤ .block
| ➤ .unblock
| ➤ .clearchats
| ➤ .jid
| ➤ .ss
*＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿*

> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ.ɴᴀᴅᴜᴡᴀ-ᴠ1*`);
                        break;
                    case '2':               
                        reply(`╭────────────────❍❍➣
 🔄 *𝐂𝐨𝐧𝐯𝐞𝐫𝐭 𝐌𝐞𝐧𝐮*
┝───────❍❍❍❍❍
┝❍  .convert
┝❍ .sticker2
┝❍ .tts
┝❍ .qmake
┝❍ .readmore
┝❍ .sticker
┝❍ .vv
┝❍ .circle
┝❍ .crop
┝❍ .round
┝❍ .toaudio
┝❍ .toanime
┝❍ .currency
┝❍ .url
┝❍ .img2url
┝❍ .trt
╰────────────────❍❍➣

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ.ɴᴀᴅᴜᴡᴀ-ᴠ1*`);
                        break;
                    case '3':               
                        reply(`╭────────────────❍❍➣
 👾 *𝐀𝐢 𝐌𝐞𝐧𝐮*
┝───────❍❍❍❍❍
┝❍ .ai
┝❍ .bing
┝❍ .copilot
┝❍ .blackbox
┝❍ .bingimgai
┝❍ .gemini
┝❍ .gpt4
┝❍ .laland
┝❍ .obfus
┝❍ .prodia
┝❍ .prodia2
┝❍ .texttoimg1
┝❍ .texttoimg2
┝❍ .texttoimg3
┝❍ .aemtv1
┝❍ .aemtv2
┝❍ .aemtv3
┝❍ .aemtv4
┝❍ .aemtv5
┝❍ .aemtv6
┝❍ .aemtv7
╰────────────────❍❍➣

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ.ɴᴀᴅᴜᴡᴀ-ᴠ1*`);
                        break;
                    case '4':               
                        reply(`╭────────────────❍❍➣
 🔍 *𝐒𝐞𝐚𝐫𝐜𝐡 𝐌𝐞𝐧𝐮*
┝───────❍❍❍❍❍
┝❍ .lyric 
┝❍ .yts
┝❍ .srepo
┝❍ .weather1
┝❍ .horo
┝❍ .google
┝❍ .couplepp
┝❍ .snumber
┝❍ .weather
╰────────────────❍❍➣

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ.ɴᴀᴅᴜᴡᴀ-ᴠ1*`);
                        break;
                    case '5':               
                        reply(`╭────────────────❍❍➣
 📥 *𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐌𝐞𝐧𝐮*
┝───────❍❍❍❍❍
┝❍ .song2
┝❍ .video
┝❍ .fb
┝❍ .tt
┝❍ .gdrive
┝❍ .apkdl
┝❍ .twitter
┝❍ .apk
┝❍ .img
┝❍ .mfire
┝❍ .scloud
┝❍ .song
┝❍ .xnxx
┝❍ .xvideo
┝❍ .mega
┝❍ .gitclone
╰────────────────❍❍➣

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ.ɴᴀᴅᴜᴡᴀ-ᴠ1*`);
                        break;
                    case '6':               
                        reply(`╭────────────────❍❍➣
 🔧 *𝐌𝐚𝐢𝐧 𝐌𝐞𝐧𝐮*
┝───────❍❍❍❍❍
┝❍  .runtime
┝❍ .alive
┝❍ .allmenu
┝❍ .owner
┝❍ .support
┝❍ .repo
┝❍ .about
┝❍ .system
┝❍ .ping
┝❍ .allmenu
┝❍ .menu
╰────────────────❍❍➣

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ.ɴᴀᴅᴜᴡᴀ-ᴠ1*`);
                        break;
                    case '7':               
                        reply(`*＿＿＿＿＿＿＿＿＿＿[ Group Menu ☃️ ]＿＿＿＿＿＿＿＿＿＿＿*

| ➤ .mute
| ➤ .unmute
| ➤ .promote
| ➤ .demote
| ➤ .add
| ➤ .kick
| ➤ .setwelcome
| ➤ .setgoodbye
| ➤ .admins
| ➤ .groupdesc
| ➤ .groupinfo
| ➤ .grouplink
| ➤ .gname
| ➤ .setsubject
| ➤ .tagall
| ➤ .requests
| ➤ .accept
| ➤ .reject
| ➤ .hidetag
| ➤ .lock
| ➤ .unlock
| ➤ .approve
| ➤ .poll
| ➤ .getpic
*＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿*

> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ.ɴᴀᴅᴜᴡᴀ-ᴠ1*`);
                       break;
                    case '8':               
                        reply(`*＿＿＿＿＿＿＿＿＿＿[ Anime Menu 🧚🏻‍♀️ ]＿＿＿＿＿＿＿＿＿＿＿*

| ➤ .animegirl
| ➤ .loli
| ➤ .waifu
| ➤ .neko
| ➤ .megumin
| ➤ .maid
| ➤ .awoo
*＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿*

*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ.ɴᴀᴅᴜᴡᴀ-ᴠ1*`)
                    break;
                    case '9':               
                        reply(`╭────────────────❍❍➣
 ⚙️ *𝐎𝐭𝐡𝐞𝐫 𝐌𝐞𝐧𝐮*
┝───────❍❍❍❍❍
┝❍ .anime1
┝❍ .anime2
┝❍ .anime3
┝❍ .anime4
┝❍ .anime5
┝❍ .loli
┝❍ .waifu
┝❍ .neko
┝❍ .megumin
┝❍ .maid
┝❍ .awoo
┝❍ .define
┝❍ .githubstalk
┝❍ .gpass
┝❍ .wiki
┝❍ .ss
╰────────────────❍❍➣

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ.ɴᴀᴅᴜᴡᴀ-ᴠ1*`);

                    break;
                    case '10':               
                        reply(`*＿＿＿＿＿＿＿＿＿＿[ News Menu 📃 ]＿＿＿＿＿＿＿＿＿＿＿*

| ➤ .hirunews
| ➤ .derananews
| ➤ .lankadeepa
| ➤ .siyathanews
| ➤ .itnnews
| ➤ .sirasanews
| ➤ .nethnews
*＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿*

> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ.ɴᴀᴅᴜᴡᴀ-ᴠ1*`);

                    break;
                    case '12':               
                        reply(`*＿＿＿＿＿＿＿＿＿＿[ Bug Menu 👾 ]＿＿＿＿＿＿＿＿＿＿＿*

| ➤ .bug1
| ➤ .bug2
*＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿*

> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ.ɴᴀᴅᴜᴡᴀ-ᴠ1*`);

                    
                        break;
                    default:
                        reply("Invalid option. Please select a valid option🥷");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
