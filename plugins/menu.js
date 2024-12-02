const config = require('../config');
const { cmd, commands } = require('../command');

cmd(
  {
    pattern: "menu",
    desc: "Get command list",
    category: "main",
    filename: __filename,
  },
  async (
    conn,
    mek,
    m,
    {
      from,
      quoted,
      pushname,
      reply,
    }
  ) => {
    try {
      let menu = {
        main: '',
        download: '',
        group: '',
        owner: '',
        convert: '',
        search: '',
      };

      // Generate menu categories
      for (let i = 0; i < commands.length; i++) {
        if (commands[i].pattern && !commands[i].dontAddCommandList) {
          menu[commands[i].category] += `.${commands[i].pattern}\n`;
        }
      }

      // Button menu structure
      let buttonMenu = {
        text: `👋 *Hello ${pushname}*\n\nSelect a category to see available commands:`,
        footer: "✅ Powered by MR.NADUWA-V1 ✅",
        buttons: [
          { buttonId: 'menu_download', buttonText: { displayText: '📥 Download Commands' }, type: 1 },
          { buttonId: 'menu_main', buttonText: { displayText: '🏠 Main Commands' }, type: 1 },
          { buttonId: 'menu_group', buttonText: { displayText: '👥 Group Commands' }, type: 1 },
          { buttonId: 'menu_owner', buttonText: { displayText: '👑 Owner Commands' }, type: 1 },
          { buttonId: 'menu_convert', buttonText: { displayText: '🔄 Convert Commands' }, type: 1 },
          { buttonId: 'menu_search', buttonText: { displayText: '🔍 Search Commands' }, type: 1 },
        ],
        headerType: 1,
      };

      // Send button menu
      await conn.sendMessage(from, buttonMenu, { quoted: mek });
    } catch (e) {
      console.error(e);
      reply(`${e}`);
    }
  }
);

// Add a handler for button responses
cmd(
  {
    pattern: '',
    desc: 'Handle button responses',
    category: 'system',
    filename: __filename,
  },
  async (conn, mek, m) => {
    try {
      if (m.message?.buttonsResponseMessage?.selectedButtonId) {
        const buttonId = m.message.buttonsResponseMessage.selectedButtonId;

        // Route based on buttonId
        switch (buttonId) {
          case 'menu_download':
            await conn.sendMessage(m.key.remoteJid, { text: '📥 *Download Commands*\n\nAvailable commands:\n...' });
            break;
          case 'menu_main':
            await conn.sendMessage(m.key.remoteJid, { text: '🏠 *Main Commands*\n\nAvailable commands:\n...' });
            break;
          case 'menu_group':
            await conn.sendMessage(m.key.remoteJid, { text: '👥 *Group Commands*\n\nAvailable commands:\n...' });
            break;
          case 'menu_owner':
            await conn.sendMessage(m.key.remoteJid, { text: '👑 *Owner Commands*\n\nAvailable commands:\n...' });
            break;
          case 'menu_convert':
            await conn.sendMessage(m.key.remoteJid, { text: '🔄 *Convert Commands*\n\nAvailable commands:\n...' });
            break;
          case 'menu_search':
            await conn.sendMessage(m.key.remoteJid, { text: '🔍 *Search Commands*\n\nAvailable commands:\n...' });
            break;
          default:
            await conn.sendMessage(m.key.remoteJid, { text: 'Invalid button selection!' });
            break;
        }
      }
    } catch (e) {
      console.error(e);
    }
  }
);
