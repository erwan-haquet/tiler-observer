const tmi = require('tmi.js');

const opts = {
    identity: {
        username: process.env.TWITCH_BOT_USERNAME,
        password: process.env.TWITCH_OAUTH_TOKEN
    },
    channels: [
        process.env.TWITCH_CHANNEL_NAME
    ]
};

// Create the client
const client = new tmi.client(opts);

module.exports = client;