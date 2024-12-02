const config = require('../config');
const { cmd, commands } = require('../command');

// URL Converter Command
cmd({
        pattern: "url",
        alias : ['createurl'],
        category: "misc",
        filename: __filename,
        desc: "image to url."
    },
    async(Void, citel, text) => {
        if (!citel.quoted) return await citel.reply(`*Reply To Any Image/Video To Get Url*`)
        let mime = citel.quoted.mtype
        if(mime !='videoMessage' && mime !='imageMessage' ) return await citel.reply("Uhh Please, Reply To An Image/Video")
        let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
        let anu = await TelegraPh(media);
        await citel.reply('*Here is URL of your media.\n'+util.format(anu));
        return await fs.unlinkSync(media);
    }
});

// Image Fetch Command
cmd({
    pattern: "img",
    desc: "Fetch an image using a URL.",
    category: "tools",
    filename: __filename
},
async (conn, mek, m, { from, args, reply }) => {
    try {
        if (args.length === 0) return reply("Please provide a valid image URL.");
        const imageUrl = args[0];
        return await conn.sendMessage(from, { image: { url: imageUrl }, caption: "Here is your image!" }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// Text-to-Response (trt) Command
cmd({
    pattern: "trt",
    desc: "Reply with the provided text.",
    category: "tools",
    filename: __filename
},
async (conn, mek, m, { from, args, reply }) => {
    try {
        if (args.length === 0) return reply("Please provide text to respond with.");
        const responseText = args.join(" ");
        return reply(responseText);
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// Helper function to upload images (you can integrate with a hosting API)
async function uploadImageToHostingService(imageBuffer) {
    // Example: Implement image upload logic here
    // You can use services like imgbb, Cloudinary, etc.
    // For example:
    // const res = await axios.post("https://api.imgbb.com/1/upload", { image: imageBuffer.toString('base64'), key: 'your-api-key' });
    // return res.data.data.url;
    throw new Error("Upload function not implemented.");
}
