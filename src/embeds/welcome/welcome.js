const Discord = require('discord.js');
const {MessageAttachment} = require('discord.js');
const htmlToPic = require('../../middlewares/htmlToPic');
const welcomeTemplate = require('./welcome-template');
class WelcomeEmbed {

    constructor(channel){
        this.channel = channel;
    }
    Welcome(member) {

        if (!this.channel) return;

        const welcomeMessage = welcomeTemplate(member.user.username);
        htmlToPic(member, welcomeMessage).then((result)=>{
            this.channel
            .send(result)})
    }
}

module.exports = WelcomeEmbed