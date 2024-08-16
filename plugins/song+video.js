const {cmd , commands} = require('../command')
const fg = require(`api-dylux`)
const yts = require(`yt-search`)


cmd({
    pattern: "song",
    desc: "Downloade_Songs",
    category: "downloade ",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please give me url or title")
const search = await yts(q) 
const data =search.videos[0];
const url = data.url

let desc =`
🧑‍💻 MR.NADUWA-V1 SONG_DOWNLOADER 🧑‍💻

title: ${data.title} 
description: ${deta.description }
time: ${data.ago}
views: ${data.views}


MABE BY MR.NADUWA-V1 
`
await conn.sendMessage(frome,{image:{url: .thumbnail},caption:desc},{quoted:mek});
//download audio
 

let down = await fg.yta(url)
let downloadUrl =down.dl_url

  //send audio massage
  await conn.sendMessage(from,{url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})






  
}catch(e){
conssole.log(e)
reply(`${e}`)
}
})
