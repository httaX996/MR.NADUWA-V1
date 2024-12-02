const config = require('../config');
const { cmd, commands } = require('../command');

cmd({
    pattern: "buttonmenu",
    desc: "Get an advanced button-based menu of all commands",
    category: "main",
    filename: __filename
},
async (conn, mek, m, { from, pushname, reply }) => {
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

        // Building button sections dynamically
        let buttons = [];
        for (let category in menu) {
            if (menu[category].length > 0) {
                buttons.push({
                    buttonId: `menu_${category}`,
                    buttonText: { displayText: `${category.toUpperCase()} Commands` },
                    type: 1
                });
            }
        }

        let message = {
            text: `Hello ${pushname}!\n\nChoose a category to view commands.`,
            footer: "Powered by MR.NADUWA-V2",
            buttons: buttons,
            headerType: 1 // Header type for a simple text header
        };

        // Sending the button-based menu
        await conn.sendMessage(from, message, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`Error: ${e.message}`);
    }
});
