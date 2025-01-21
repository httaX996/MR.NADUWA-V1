// XVIDEO DOWNLOAD COMMAND

const { cmd } = require('../command')
const { fetchJson } = require('../lib/functions')

const apilink = 'https://api-vishwa.vercel.app/' // API LINK ( DO NOT CHANGE THIS!! )



cmd({
    pattern: "xvideo2",
    alias: ["xvdl","xvdown"],
    react: "🔞",
    desc: "xvideo downloder",
    category: "download",
    use: '.xvideo < text >',
    filename: __filename
},
async(conn, mek, m,{from, quoted, reply, q }) => {
try{

  if(!q) return await reply("𝖯𝗅𝖾𝖺𝗌𝖾 𝖦𝗂𝗏𝖾 𝗆𝖾 𝖥𝖾𝗐 𝖶𝗈𝗋𝖽 !")
    
const xv_list = await fetchJson(`${apilink}/search/xvideo?q=${q}`)
if(xv_list.result.length < 0) return await reply("Not results found !")

const xv_info = await fetchJson(`${apilink}/download/xvideo?url=${xv_list.result[0].url}`)
    
  // FIRST VIDEO
  
const msg = `
           *🤤 MR.NADUWA-V1 XVIDEO DOWNLOADER* 🔞

       
• *𝖳𝗂𝗍𝗅𝖾* - ${xv_info.result.title}

• *𝖵𝗂𝖾𝗐𝗌* - ${xv_info.result.views}

• *𝖫𝗂𝗄𝖾* - ${xv_info.result.like}

• *𝖣𝖾𝗌𝗅𝗂𝗄𝖾* - ${xv_info.result.deslike}

• *𝖲𝗂𝗓𝖾* - ${xv_info.result.size}

> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ©ᴘᴏᴡᴇʀᴅ ʙʏ 𝐌𝐑.𝐍𝐀𝐃𝐔𝐖𝐀- 𝐕1 📌`

// Sending the image with caption
          const sentMsg = await conn.sendMessage(from, {


          text: msg,
          contextInfo: {

          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
          newsletterName: '𝐌𝐑.𝐍𝐀𝐃𝐔𝐖𝐀-𝐕1 📌',
          newsletterJid: "",
          },
          externalAdReply: {
              title: `𝐌𝐑.𝐍𝐀𝐃𝐔𝐖𝐀 Xvideo Downloader`,
              body: `Can't Find The Information. You Can Try Another Way. Error Code 4043`,
              thumbnailUrl: xv_info.result.image,
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
              }
                  }
              }, { quoted: mek });

// SEND VIDEO
await conn.sendMessage(from, { document: { url: xv_info.result.dl_link }, mimetype: "video/mp4", fileName: xv_info.result.title, caption: xv_info.result.title }, { quoted: mek });


} catch (error) {
console.log(error)
reply(error)
}
})
