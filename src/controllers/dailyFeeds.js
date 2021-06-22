// const Discord = require('discord.js');
const {DailyFeeds} = require('../embeds/exports')
const Message = require('../middlewares/messageExtract')
function ShowDailyFeeds(message) {
    if (Message(message.content) === 'feeds') {
        const dailyFeeds = new DailyFeeds()
        dailyFeeds.showDailyFeeds(message.channel)   
    }
}

module.exports = ShowDailyFeeds