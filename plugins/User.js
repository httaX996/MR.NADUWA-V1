
const config = require('../config')
const {cmd , commands} = require('../command')


cmd({
    pattern: "fullpp",
    alias: ["profilepicture"],
    desc: "Get full profile picture of a user",
    category: "utilities",
    filename: __filename
},
async(conn, mek, m, { from, quoted, isGroup, sender, reply }) => {
    try {
        let userJid = quoted ? quoted.sender : sender;
        let profilePicture = await conn.profilePictureUrl(userJid, 'image');
        reply("*Downloading Profile Picture...*");
        await conn.sendMessage(from, { image: { url: profilePicture }, caption: `- Full Profile Picture` }, { quoted: mek });
    } catch (e) {
        reply("Error fetching profile picture.");
        console.log(e);
    }
});


//==========jid code 

cmd({
    pattern: "jid",
    alias: [],
    desc: "Get JID of a user or group",
    category: "utilities",
    filename: __filename
},
async(conn, mek, m, { from, quoted, isGroup, sender, reply }) => {
    try {
        let target = quoted ? quoted.sender : sender;
        reply(`*JID:*\n${target}`);
    } catch (e) {
        reply("Error retrieving JID.");
        console.log(e);
    }
});

//========left code 
cmd({
    pattern: "left",
    alias: [],
    desc: "Leave the group",
    category: "admin",
    filename: __filename
},
async(conn, mek, m, { from, isGroup, isMe, reply }) => {
    try {
        if (!isGroup) return reply("This command can only be used in groups.");
        if (!isMe) return reply("Only the bot owner can use this command.");
        reply("Goodbye 👋");
        await conn.groupLeave(from);
    } catch (e) {
        reply("Error leaving the group.");
        console.log(e);
    }
});

//==========block 

cmd({
    pattern: "block",
    alias: [],
    desc: "Block a user",
    category: "admin",
    filename: __filename
},
async(conn, mek, m, { quoted, sender, reply }) => {
    try {
        let target = quoted ? quoted.sender : sender;
        await conn.updateBlockStatus(target, "block");
        reply("User has been blocked.");
    } catch (e) {
        reply("Error blocking the user.");
        console.log(e);
    }
});


  //===========  block un
          

cmd({
    pattern: "unblock",
    alias: [],
    desc: "Unblock a user",
    category: "admin",
    filename: __filename
},
async(conn, mek, m, { quoted, sender, reply }) => {
    try {
        let target = quoted ? quoted.sender : sender;
        await conn.updateBlockStatus(target, "unblock");
        reply("User has been unblocked.");
    } catch (e) {
        reply("Error unblocking the user.");
        console.log(e);
    }
});


//=====pp=========
cmd({
    pattern: "pp",
    alias: [],
    desc: "Set the profile picture for the group",
    category: "admin",
    filename: __filename
},
async(conn, mek, m, { from, isGroup, isBotAdmins, isAdmins, quoted, reply }) => {
    try {
        if (!isGroup) return reply("This command can only be used in groups.");
        if (!isBotAdmins) return reply("I need admin rights to change the profile picture.");
        if (!quoted || quoted.mimetype !== "image/jpeg") return reply("Please reply to a JPG image.");
        let media = await conn.downloadMediaMessage(quoted);
        await conn.updateProfilePicture(from, media);
        reply("Profile picture updated successfully.");
    } catch (e) {
        reply("Error setting profile picture.");
        console.log(e);
    }

});




