const broker  = require('../broker');
const Message = require('../model/Message.js');

function MessageEventHandler(channel, userstate, msg, self) {
    if (self) {
        return;
    } // Ignore messages from the bot


    // log the message for visualization
    console.log(msg);

    // send the message to the broker
    broker.publish(new Message({channel, userstate, msg}), 'postMessage');
}

module.exports = MessageEventHandler;