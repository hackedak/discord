
const Discord = require('discord.js');
const Ping = require('./src/controllers/pingController');
const WelcomeEmbed = require('./src/controllers/welcomeController')
const ShowDailyFeeds = require('./src/controllers/dailyFeeds')


require('dotenv').config()
const client = new Discord.Client();



client.on('ready', () => {
    console.log('I am ready!');
  });

// ping check from discord client  
client.on('message', message => Ping(message));
client.on('message', message => ShowDailyFeeds(message));
  
// welcome meeting on adding member to guild
client.on('guildMemberAdd', member => WelcomeEmbed(member));
  
  



// Log our bot in using the token from https://discord.com/developers/applications
client.login(process.env.BOT_TOKEN);
