const {cmd , commands} = require('../command')
const fg = require(`api-dylux`)
const yts = require(`yt-search`)



cmd({ 
	pattern: "song", 
	desc: "Download songs", 
	category: "download", 
	filename: __filename }, 
    async (conn, mek, m, { from, q, reply }) => { 
	    try { 
		    if(!q) return reply('please give a song name')
	            const yts = require('yt-search');
		    const search = await yts(q); 
		    const data = search.videos[0]; 
		    const url = data.url; 
		    const formatViews = views => views >= 1_000_000_000 ? `${(views / 1_000_000_000).toFixed(1)}B` : views >= 1_000_000 ? `${(views / 1_000_000).toFixed(1)}M` : views >= 1_000 ? `${(views / 1_000).toFixed(1)}K` : views.toString(); 
		    let desc = `> අම්මටහුඩු MD YTDL\n\n🎶 *𝗧𝗶𝘁𝗹𝗲*: _${data.title}_\n👤 *𝗖𝗵𝗮𝗻𝗻𝗲𝗹*: _${data.author.name}_\n📝 *𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻*: _${data.description}_\n⏳ *𝗧𝗶𝗺𝗲*: _${data.timestamp}_\n⏱️ *𝗔𝗴𝗼*: _${data.ago}_\n👁️‍🗨️ *𝗩𝗶𝗲𝘄𝘀*: _${formatViews(data.views)}_\n🔗 *𝗟𝗶𝗻𝗸*: ${url}`; 
		    await conn.sendMessage(from, { image: { url: data.thumbnail }, caption: desc }, { quoted: mek }); 
		    const data1 = await fetchJson(`https://apitest1-f7dcf17bd59b.herokuapp.com/download/ytmp3?url=${url}`)
		    await conn.sendPresenceUpdate('recording', from); 
		    await conn.sendMessage(from, { audio: { url: data1.result.dl_link }, mimetype: "audio/mpeg" }, { quoted: mek }); 
		    await conn.sendMessage(from, { document: { url: data1.result.dl_link }, mimetype: "audio/mpeg", fileName: `${data.title}.mp3`, caption: "💻 *KAVI-EXE  YTDL*" }, { quoted: mek }); 
	    } catch (e) { 
		    console.log(e); 
		    reply(`Error: ${e.message}`); 
	    } 
    });
