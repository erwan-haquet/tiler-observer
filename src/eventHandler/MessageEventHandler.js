const broker  = require('../broker');
const Message = require('../model/Message.js');

function MessageEventHandler(channel, userstate, msg, self) {
    if (self) {
        return;
    } // Ignore messages from the bot

    const message = new Message({
        msg: msg.trim(),
        username: userstate['username'],
        displayName: userstate['display-name'],
        userId: userstate['user-id']
    });

    broker.publish(message, 'messagePosted');
}

module.exports = MessageEventHandler;