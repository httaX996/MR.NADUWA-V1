const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menu ={
    main: '',
download: '',
group: '',
owner: '',
convert: '',
search: ''
};

    for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
}
            case 'menu':
            case 'allmenu':
                let madeMenu = `👋 Hello ${pushname}*

*╭─「 ᴄᴏᴍᴍᴀɴᴅ ᴘᴀɴᴇʟ」*
*│◈ ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}*
*│◈ ʀᴀᴍ ᴜꜱᴀɢᴇ : ${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}*
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
*╰╼╼╼╼╼╼╼╼╼╼*

_*🌟 Reply with the Number you want to select*_

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ mr.naduwa🥷*`
if (typemenu === 'v1') {
                    mrsupunfernandosendMessage(m.chat, {
                        text: supunmenuoh,
                        contextInfo: {
                            externalAdReply: {
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://telegra.ph/file/69c6550dd74cc37760b73.jpg',
                                sourceUrl: link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                            }
                        }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v2') {
                    mrsupunfernandosendMessage(m.chat, {
      video: fs.readFileSync('./supunMedia/thumb2.mp4'),
      gifPlayback: true,
      caption: supunmenuoh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/J5QHpVg/20241011-084233.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                } else if (typemenu === 'v3') {
                    mrsupunfernandosendMessage(m.chat, {
                        video: fs.readFileSync('./supunMedia/thumb2.mp4'),
                        caption: supunmenuoh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    mrsupunfernandorelayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                           callType: "AUDIO",
                           scheduledTimestampMs: 1200,
                           title: supunmenuoh
                        }
                    }, {})
                }
                break

