module.exports = {
    pattern: 'typing', // Command name
    alias: ['type'], // Alternative commands
    description: 'Enable or disable fake typing status',
    react: '💬', // React emoji when command is triggered
    function: async (conn, mek, m, { from, reply, q }) => {
        try {
            // Check the command argument (on/off)
            if (q === 'on') {
                await conn.sendPresenceUpdate('composing', from); // Fake typing enabled
                reply('Fake typing started... 💬');
            } else if (q === 'off') {
                await conn.sendPresenceUpdate('paused', from); // Fake typing disabled
                reply('Fake typing stopped.');
            } else {
                reply('Invalid usage! Use `.typing on` or `.typing off`.');
            }
        } catch (error) {
            console.error('Error in typing.js:', error);
            reply('An error occurred while processing your command.');
        }
    },
};
