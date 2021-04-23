const Discord = require('discord.js');
const Ping = require('./src/embeds/ping/ping');
const WelcomeEmbed = require('./src/controllers/welcome')

require('dotenv').config()
const client = new Discord.Client();




client.on('ready', () => {
    console.log('I am ready!');
  });
  // ping check from discord client
client.on('message', message => Ping.Ping(message));
  
  // Create an event listener for new guild members
client.on('guildMemberAdd', member => WelcomeEmbed(member));
  
  
  // Log our bot in using the token from https://discord.com/developers/applications
client.login(process.env.BOT_TOKEN);