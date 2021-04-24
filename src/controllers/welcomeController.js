const Discord = require('discord.js');
const {welcomeMsg} = require('../embeds/exports')

function WelcomeGreeting(member) {
    const channel = member.guild.channels.cache.find(member => member.name === 'welcome');
    const greetingMsg = new welcomeMsg(channel)
    greetingMsg.Welcome(member)
}

module.exports = WelcomeGreeting