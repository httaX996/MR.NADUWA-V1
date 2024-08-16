const { Client, Buttons, List } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
    console.log('QR code generated');
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async message => {
    if (message.body.toLowerCase() === 'menu') {
        const button = new Buttons(
            'Welcome to the bot! Choose an option:',
            [
                { body: 'Option 1' },
                { body: 'Option 2' },
                { body: 'Option 3' },
            ],
            'Menu Title',
            'Bot Footer'
        );
        
        client.sendMessage(message.from, button);
    }

    // Handle button responses
    if (message.body === 'Option 1') {
        client.sendMessage(message.from, 'You selected Option 1');
    } else if (message.body === 'Option 2') {
        client.sendMessage(message.from, 'You selected Option 2');
    } else if (message.body === 'Option 3') {
        client.sendMessage(message.from, 'You selected Option 3');
    }
});

client.initialize();
