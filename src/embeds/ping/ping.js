const exampleEmbed = require("./ping-template");

class Ping{
    static Ping(message){
        if (message.content === 'ping') {
            // Send "pong" to the same channel
            message.channel.send({ embed: exampleEmbed });
          }
    }
}

module.exports = Ping