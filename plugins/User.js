
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
        
        // Try to fetch the profile picture URL
        let profilePicture;
        try {
            profilePicture = await conn.profilePictureUrl(userJid, 'image');
        } catch {
            profilePicture = 'https://via.placeholder.com/300.png/09f/fff?text=No+Profile+Picture'; // Default image URL
        }

        reply("*Downloading Profile Picture...*");

        // Send the profile picture
        await conn.sendMessage(from, { image: { url: profilePicture }, caption: `- Full Profile Picture` }, { quoted: mek });
    } catch (e) {
        reply("Error fetching profile picture.");
        console.error(e); // Log the error for debugging
    }
});
