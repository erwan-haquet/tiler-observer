const config = require('./config');
const amqp = require('amqplib').connect(config.connector);

/**
 * Publish a message to the broker
 *
 * @param body
 * @param event {string} A valid EventName is required
 */
function publish(body, event) {

    amqp.then(function (conn) {
        return conn.createChannel();
    }).then(function (channel) {
        return channel.assertQueue(process.env.RABBITMQ_QUEUE, {durable: true}).then(function () {
            channel.sendToQueue(process.env.RABBITMQ_QUEUE, new Buffer.from(JSON.stringify(body)), {
                headers: {
                    event: event
                }
            });
            console.log(body.msg)
        });
    }).catch(console.warn);

}


module.exports = {
    publish
};