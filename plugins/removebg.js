const config = require('../config')
const {cmd , commands} = require('../command')

case 'removebg': {
    if (!isPremium) return m.reply(mess.prem);
    if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`);
    if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`);

    let remobg = require('remove.bg');
    let apirnobg = [
        'q61faXzzR5zNU6cvcrwtUkRU',
        'S258diZhcuFJooAtHTaPEn4T',
        '5LjfCVAp4vVNYiTjq9mXJWHF',
        'aT7ibfUsGSwFyjaPZ9eoJc61',
        'BY63t7Vx2tS68YZFY6AJ4HHF',
        '5Gdq1sSWSeyZzPMHqz7ENfi8',
        '86h6d6u4AXrst4BVMD9dzdGZ',
        'xp8pSDavAgfE5XScqXo9UKHF',
        'dWbCoCb3TacCP93imNEcPxcL'
    ];
    
    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)];
    let hmm = './remobg-' + getRandom('');
    let localFile = await supunfernando.downloadAndSaveMediaMessage(qmsg, hmm);
    let outputFile = './hremo-' + getRandom('.png');
    
    m.reply(mess.wait);
    
    remobg.removeBackgroundFromImageFile({
        path: localFile,
        apiKey: apinobg,
        size: "regular",
        type: "auto",
        scale: "100%",
        outputFile
    }).then(async result => {
        supunfernando.sendMessage(m.chat, { image: fs.readFileSync(outputFile), caption: 'Done Desuu~' }, { quoted: m });
        await fs.unlinkSync(localFile);
        await fs.unlinkSync(outputFile);
    });
}
break

