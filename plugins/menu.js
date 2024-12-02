const config = require('../config');
const { cmd, commands } = require('../command');

cmd(
  {
    pattern: "menu",
    desc: "get cmd list",
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

      for (let i = 0; i < commands.length; i++) {
        if (commands[i].pattern && !commands[i].dontAddCommandList) {
          menu[commands[i].category] += `.${commands[i].pattern}\n`;
        }
      }

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

      await conn.sendMessage(from, buttonMenu, { quoted: mek });

      conn.on('button-response', async (buttonResponse) => {
        const { buttonId } = buttonResponse;
        switch (buttonId) {
          case 'menu_download':
            reply(`📥 *Download Commands*\n\n${menu.download}`);
            break;
          case 'menu_main':
            reply(`🏠 *Main Commands*\n\n${menu.main}`);
            break;
          case 'menu_group':
            reply(`👥 *Group Commands*\n\n${menu.group}`);
            break;
          case 'menu_owner':
            reply(`👑 *Owner Commands*\n\n${menu.owner}`);
            break;
          case 'menu_convert':
            reply(`🔄 *Convert Commands*\n\n${menu.convert}`);
            break;
          case 'menu_search':
            reply(`🔍 *Search Commands*\n\n${menu.search}`);
            break;
          default:
            reply('Invalid button selection!');
            break;
        }
      });
    } catch (e) {
      console.log(e);
      reply(`${e}`);
    }
  }
);
