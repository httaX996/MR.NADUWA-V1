const axios = require('axios');
const fs = require('fs');
const { getBuffer, getRandom } = require('./lib/functions');

module.exports.commands = [
  {
    pattern: 'downloadaudio',
    alias: ['dlaudio'],
    react: '🎵',
    description: 'Download audio from a URL',
    async function(conn, mek, m, { args, reply }) {
      if (!args[0]) return reply('Please provide a valid URL!');
      const url = args[0];
      const fileName = `audio_${getRandom('.mp3')}`;

      try {
        const res = await axios.get(url, { responseType: 'stream' });
        res.data.pipe(fs.createWriteStream(fileName));

        res.data.on('end', async () => {
          const buffer = fs.readFileSync(fileName);
          await conn.sendMessage(m.from, { audio: buffer, mimetype: 'audio/mpeg' }, { quoted: mek });
          fs.unlinkSync(fileName);
          reply('Audio downloaded and sent successfully!');
        });
      } catch (err) {
        console.error(err);
        reply('Failed to download audio.');
      }
    }
  },
  {
    pattern: 'downloadvideo',
    alias: ['dlvideo'],
    react: '📹',
    description: 'Download video from a URL',
    async function(conn, mek, m, { args, reply }) {
      if (!args[0]) return reply('Please provide a valid URL!');
      const url = args[0];
      const fileName = `video_${getRandom('.mp4')}`;

      try {
        const res = await axios.get(url, { responseType: 'stream' });
        res.data.pipe(fs.createWriteStream(fileName));

        res.data.on('end', async () => {
          const buffer = fs.readFileSync(fileName);
          await conn.sendMessage(m.from, { video: buffer, mimetype: 'video/mp4' }, { quoted: mek });
          fs.unlinkSync(fileName);
          reply('Video downloaded and sent successfully!');
        });
      } catch (err) {
        console.error(err);
        reply('Failed to download video.');
      }
    }
  }
];
