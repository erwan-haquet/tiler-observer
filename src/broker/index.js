const config = require('./config');
const amqp = require('amqplib').connect(config.connector);

/**
 * Publish a message to the broker
 *
 * @param body
 * @param action {string} A valid action is required
 */
function publish(body, action) {

    amqp.then(function (conn) {
        return conn.createChannel();
    }).then(function (channel) {
        return channel.assertQueue(process.env.RABBITMQ_QUEUE, {durable: true}).then(function () {
            channel.sendToQueue(process.env.RABBITMQ_QUEUE, new Buffer.from(JSON.stringify(body)), {
                headers: {
                    action: action
                }
            });
            console.log(body.msg)
        });
    }).catch(console.warn);

}


module.exports = {
    publish
};