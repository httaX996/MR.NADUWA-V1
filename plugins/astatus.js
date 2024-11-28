const config = require('../config')

const { bot, forwardOrBroadCast } = require('../lib')

// bot(
// 	{
// 		pattern: 'astatus ?(.*)',
// 		fromMe: true,
// 		desc: 'msg',
// 		type: 'whatsapp',
// 	},
// 	async (message, match) => {}
// )

const possibleReplies = 'send,snd,sent,ewnn,ewapan,ewpn,dapan,එවපන්,එවහම්,එවාම්,දාන්න'

bot({ on: 'text', fromMe: false, type: 'astatus' }, async (message, match) => {
	if (
		message.reply_message &&
		message.reply_message.key.remoteJid == 'status@broadcast' &&
		!message.isGroup
	) {
		for (const reply of possibleReplies.split(',')) {
			if (new RegExp(reply, 'i').test(message.text)) {
				return await forwardOrBroadCast(message.jid, message, {
					quoted: message.data,
				})
			}
		}
	}
})
