const config = require('./config');
const amqp = require('amqplib').connect(config.connector);

/**
 * Publish a message to the broker
 *
 * @param body
 * @param command {string} A valid command is required
 */
function publish(body, command) {

    amqp.then(function (conn) {
        return conn.createChannel();
    }).then(function (channel) {
        return channel.assertQueue(process.env.RABBITMQ_QUEUE, {durable: true}).then(function () {
            channel.sendToQueue(process.env.RABBITMQ_QUEUE, new Buffer.from(JSON.stringify({
                payload: body
            })), {
                headers: {
                    command: command
                }
            });
        });
    }).catch(console.warn);
}

module.exports = {
    publish
};
