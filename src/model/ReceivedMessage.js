class ReceivedMessage {

    // Read more about userstate here => https://dev.twitch.tv/docs/irc/tags#privmsg-twitch-tags
    constructor({channel, msg, userstate}) {

        // Message
        this.messageId = userstate.id;
        this.message = msg;
        this.messageType = userstate['message-type'];
        this.emotes = userstate.emotes;

        // User
        this.userId = userstate['user-id'];
        this.userName = userstate['display-name'];
        this.badges = userstate.badges;
        this.badgeInfo = userstate['badge-info'];
        this.color = userstate.color;

        // Channel
        this.channel = channel;
        this.roomId = userstate['room-id'];
    }
}

module.exports = ReceivedMessage;
