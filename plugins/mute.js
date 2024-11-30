const config = require('../config')
const {cmd , commands} = require('../command')
const isMute = mute.includes(m.chat) ? true : false
cmd({
    pattern: "mute",
    desc: "group mute&unmute",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return m.reply('Fitur Khusus admin!')
if (args[0] === "on") {
if (isMute) return m.reply(`Udah Mute`)
mute.push(m.chat)
fs.writeFileSync('./database/mute.json', JSON.stringify(mute, null, 2))
m.reply('_Succes Mute_')
}
else if (args[0] === "off") {
if (!isMute) return m.reply(`Udah Unmute`)
let anu = mute.indexOf(m.chat)
mute.splice(anu, 1)
fs.writeFileSync('./database/mute.json', JSON.stringify(mute, null, 2))
m.reply('_Done Dah Di Off_')
}else {
m.reply(`*on* / *off*`)
}}

catch(e){
console.log(e)
reply(`${e}`)
}
})
