const Discord = require('discord.js');
const {PingMsg} = require('../embeds/exports');
const Ping = require('../embeds/ping/ping');

function PingMe(message) {
    Ping.Ping(message);
}

module.exports = PingMe;


// ODMyNTUyNDY0Njc5MDQzMDc0.YHlc5w.Tsc8AjfVQxId9nvImwzHFXRJ7DQ