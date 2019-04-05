const path = require('path');
require('dotenv').config({ path: path.resolve('.env.local')});

const MessageEventHandler = require('./eventHandler/MessageEventHandler');
const ConnectedEventHandler = require('./eventHandler/ConnectedEventHandler');

const twitchClient = require('./TwitchClient');

// Register event handlers
twitchClient.on('message', MessageEventHandler);
twitchClient.on('connected', ConnectedEventHandler);

twitchClient.connect();
