const pingTemplateGenerator = require("./ping-template");
const Message = require('../../middlewares/messageExtract')
class Ping{
    static Ping(message){
        if (Message(message.content) === 'ping') {
            // Send "pong" to the same channel
            message.channel.send({ embed: pingTemplateGenerator() });
          }
    }
}

module.exports = Ping