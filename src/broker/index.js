const config = require('./config');
const amqp = require('amqplib').connect(config.connector);

/**
 * Publish a message to the broker
 *
 * @param queue {string} The name of the queue which will receive the message
 * @param message
 */
function publish(queue, message) {

    amqp.then(function (conn) {
        return conn.createChannel();
    }).then(function (channel) {
        return channel.assertQueue(queue, {durable: true}).then(function () {
            channel.sendToQueue(queue, new Buffer.from(JSON.stringify(message)), {
                headers: {
                    type: 'App\\Message\\Message'
                }
            });
            console.log(message.msg)
        });
    }).catch(console.warn);

}


module.exports = {
    publish
};