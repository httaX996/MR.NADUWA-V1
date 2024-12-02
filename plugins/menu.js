const config = require('../config');
const { cmd, commands } = require('../command');

cmd({
    pattern: "supermenu",
    desc: "Get an advanced menu of all commands",
    category: "main",
    filename: __filename
},
async (conn, mek, m, { from, quoted, pushname, reply }) => {
    try {
        let menu = {
            main: [],
            download: [],
            group: [],
            owner: [],
            convert: [],
            search: [],
            others: []
        };

        // Categorizing commands
        for (let i = 0; i < commands.length; i++) {
            if (commands[i].pattern && !commands[i].dontAddCommandList) {
                let cmdPattern = `.${commands[i].pattern}`;
                let category = commands[i].category ? commands[i].category.toLowerCase() : 'others';
                
                if (menu[category]) {
                    menu[category].push(cmdPattern);
                } else {
                    menu.others.push(cmdPattern);
                }
            }
        }

        // Building the menu text dynamically
        let sections = [];
        for (let category in menu) {
            if (menu[category].length > 0) {
                sections.push(`
✅ *${category.toUpperCase()} COMMANDS* ✅
${menu[category].join('\n')}
                `.trim());
            }
        }

        let madeMenu = `
📍▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬📍
▮👋 *Hello ${pushname}*
▮   
${sections.join('\n\n')}
▮   
▮✅ *_POWERED BY MR.NADUWA-V2_* ✅
📍▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬📍
        `;

        // Sending the menu as a message with an image
        await conn.sendMessage(from, {
            image: { url: "https://telegra.ph/file/69c6550dd74cc37760b73.jpg" },
            caption: madeMenu
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`Error: ${e.message}`);
    }
});
