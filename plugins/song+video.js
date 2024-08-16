const {cmd , commands} = require('../command')
const fg = require(`api-dylux`)
const yts = require(`yt-search`)


cmd({
    pattern: "song",
    desc: "Downloade Songs",
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

  //send audio + document  massage
  await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"audio/mp3",fileName:data.title + ."mp3",caption:"MADE BY MR.NADUWA-V1"},{quoted:mek})






  
}catch(e){
conssole.log(e)
reply(`${e}`)
}
})

//============video-dl============
cmd({
    pattern: "video",
    desc: "Downloade videos",
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
🧑‍💻 MR.NADUWA-V1 VIDEO_DOWNLOADER 🧑‍💻

title: ${data.title} 
description: ${deta.description }
time: ${data.ago}
views: ${data.views}


MABE BY MR.NADUWA-V1 
`
await conn.sendMessage(frome,{image:{url: .thumbnail},caption:desc},{quoted:mek});
//download audio
 

let down = await fg.ytv(url)
let downloadUrl =down.dl_url

  //send video + document  massage
  await conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})
  await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ."mp4",caption:"MADE BY MR.NADUWA-V1"},{quoted:mek})






  
}catch(e){
conssole.log(e)
reply(`${e}`)
}
})
