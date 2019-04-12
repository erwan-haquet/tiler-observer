const broker  = require('../broker');
const ReceivedMessage = require('../model/ReceivedMessage.js');

function MessageEventHandler(channel, userstate, msg, self) {
    if (self) {
        return;
    } // Ignore messages from the bot

    // log the message for visualization
    console.log(new ReceivedMessage({channel, userstate, msg}));

    // send the message to the broker
    broker.publish(new ReceivedMessage({channel, userstate, msg}), 'logReceivedMessage');
}

module.exports = MessageEventHandler;