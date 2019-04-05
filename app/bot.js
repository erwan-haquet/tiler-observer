const path = require('path');
require('dotenv').config({ path: path.resolve('./.env.local')});

const MessageEventHandler = require('./eventHandler/MessageEventHandler');
const ConnectedEventHandler = require('./eventHandler/ConnectedEventHandler');

const client = require('./client');

// Register event handlers
client.on('message', MessageEventHandler);
client.on('connected', ConnectedEventHandler);

client.connect();
