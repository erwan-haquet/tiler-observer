const tmi = require('tmi.js');

const options = {
    connection: {
        reconnect: true,
        maxReconnectAttempts: 5
    },
    identity: {
        username: process.env.TWITCH_BOT_USERNAME,
        password: process.env.TWITCH_OAUTH_TOKEN
    },
    channels: [
        process.env.TWITCH_CHANNEL_NAME
    ]
};

const twitchClient = new tmi.client(options);

module.exports = twitchClient;
