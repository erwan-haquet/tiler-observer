class Message {
    constructor({msg, username, displayName, userId}) {
        this.msg = msg;
        this.username = username;
        this.displayName = displayName;
        this.userId = userId;
    }
}

module.exports = Message;