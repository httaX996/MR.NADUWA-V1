const config = require('../config')
const {cmd , commands} = require('../command')


cmd({
    pattern: "apk",
    desc: "apk downloder",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{


  if (!text) return m.reply('*Masukkan nama aplikasi*');

  try {
    let apk = await (await fetch(`https://endpoint.web.id/gaming/android1-search?key=${global.Shannz}&query=` + text)).json();
    
    if (apk.status && apk.result.length > 0) {
      let appResults = apk.result.map(app => {
        return `*App Name:* ${app.name}\n*Developer:* ${app.developer}\n*Rating:* ${app.rating}\n*Download Link:* ${app.link}\n*Icon:* ${app.imageUrl}\n\n`;
      }).join('');
      
      m.reply(`Berikut adalah aplikasi yang ditemukan berdasarkan pencarian "${text}":\n\n${appResults}`);
    } else {
      m.reply(`Tidak ada aplikasi yang ditemukan dengan kata kunci: *${text}*`);
    }
    
  } catch (e) {
    m.reply('*Terjadi error :* ' + e);
  }
  
  

  if (!text) return aiRep('*Masukkan link html*');

  try {
    let apk = await (await fetch(`https://endpoint.web.id/gaming/android1-detail?key=${global.Shannz}&url=` + text)).json();
    
    if (apk.status && apk.result) {
      let app = apk.result; 
      
      let title = app.title;
      let imageUrl = app.imageUrl;
      let developer = app.developer;
      let description = app.description;
      let version = app.version;
      let fileSize = app.fileSize;
      let operatingSystem = app.operatingSystem;
      let rating = app.rating;
      let ratingCount = app.ratingCount;
      let downloadUrl = app.downloadUrl;

      let messageContent = `
*Title:* ${title}
*Developer:* ${developer}
*Version:* ${version}
*File Size:* ${fileSize}
*Operating System:* ${operatingSystem}
*Rating:* ${rating} (based on ${ratingCount} ratings)

*Description:*
${description}

*Download Link:* ${downloadUrl}

*Icon:*
${imageUrl}`;

      m.reply(messageContent);
    } else {
      m.reply(`Tidak ada aplikasi yang ditemukan dengan kata kunci: *${text}*`);
    }
    
  } catch (e) {
    m.reply('*Terjadi error :* ' + e);
  }
  
  

  if (!text) return aiRep('*Masukkan link aplikasi yang ingin diunduh?*');
  
  try {
    let apk = await (await fetch(`https://endpoint.web.id/gaming/android1-download?key=${global.Shannz}&url=` + encodeURIComponent(text))).json();
    
    if (apk.status && apk.result) {
      let app = apk.result;
      let title = app.title;          
      let imageUrl = app.imageUrl;   
      let version = app.version;      
      let downloadUrl = app.downloadUrl; 

      Al.sendMessage(m.chat, { document: { url: downloadUrl }, fileName: title, mimetype: 'application/vnd.android.package-archive', caption: `*Title:* ${title}\n*Version:* ${version}\n*Download Link:* ${downloadUrl}\n*Image:* ${imageUrl}`,
      }, { quoted: fsaluran });
      
    } else {
      aiRep('Tidak ada aplikasi yang ditemukan dengan link tersebut.');
    }
  } catch (e) {
    m.reply('*Terjadi error :* ' + e);
  }

  
