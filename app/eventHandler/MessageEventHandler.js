const Message = require('../model/Message.js');

function MessageEventHandler(channel, userstate, msg, self) {
    // Ignore messages from the bot
    if (self) {
        return;
    }

    const message = new Message({
        msg: msg.trim(),
        username: userstate['username'],
        displayName: userstate['display-name'],
        userId: userstate['user-id']
    });

    console.log(message);
}

module.exports = MessageEventHandler;