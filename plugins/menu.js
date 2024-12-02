const config = require('../config');
const { cmd, commands } = require('../command');

cmd({
    pattern: "menu",
    desc: "get cmd list",
    category: "main",
    filename: __filename
},
async (conn, mek, m, { from, quoted, pushname, reply }) => {
    try {
        // Initialize command categories
        let menu = {
            main: '',
            download: '',
            group: '',
            owner: '',
            convert: '',
            search: ''
        };

        // Populate the menu with commands from each category
        for (let i = 0; i < commands.length; i++) {
            if (commands[i].pattern && !commands[i].dontAddCommandList) {
                menu[commands[i].category] += `.${commands[i].pattern}\n`;
            }
        }

        // Menu caption
        let madeMenu = `
📍▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬📍
▮👋 *Hello ${pushname}*
▮   
▮ Choose a category to view commands:
▮✅ *_POWERED BY MR.NADUWA-V1_* ✅
📍▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬📍
`;

        // Define buttons for each command category
        let buttons = [
            { buttonId: 'menu_download', buttonText: { displayText: '📥 Download' }, type: 1 },
            { buttonId: 'menu_main', buttonText: { displayText: '🏠 Main' }, type: 1 },
            { buttonId: 'menu_group', buttonText: { displayText: '👥 Group' }, type: 1 },
            { buttonId: 'menu_owner', buttonText: { displayText: '👑 Owner' }, type: 1 },
            { buttonId: 'menu_convert', buttonText: { displayText: '🔄 Convert' }, type: 1 },
            { buttonId: 'menu_search', buttonText: { displayText: '🔍 Search' }, type: 1 }
        ];

        // Send the button menu
        await conn.sendMessage(from, {
            image: { url: "https://telegra.ph/file/69c6550dd74cc37760b73.jpg" },
            caption: madeMenu,
            footer: "Choose a category",
            buttons: buttons,
            headerType: 4 // Image message with buttons
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// Define submenus for button responses
cmd({
    pattern: 'menu_(.*)',
    desc: 'Submenu commands',
    category: 'main',
    filename: __filename
}, async (conn, mek, m, { from, match, reply }) => {
    try {
        let category = match[1]; // Extract the category from button ID
        let menu = {
            download: '📥 Download Commands\n\n',
            main: '🏠 Main Commands\n\n',
            group: '👥 Group Commands\n\n',
            owner: '👑 Owner Commands\n\n',
            convert: '🔄 Convert Commands\n\n',
            search: '🔍 Search Commands\n\n'
        };

        // Fetch commands for the selected category
        commands.forEach(command => {
            if (command.category === category && command.pattern) {
                menu[category] += `.${command.pattern}\n`;
            }
        });

        // Send the selected category menu
        await conn.sendMessage(from, {
            text: menu[category],
            footer: "Select another category using the main menu.",
            buttons: [{ buttonId: 'menu', buttonText: { displayText: '🔙 Back to Menu' }, type: 1 }],
            headerType: 1 // Text message with buttons
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
