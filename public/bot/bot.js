var Discord = require('discord.io');
const Discord2 = require('discord.js');
var logger = require('winston');
var auth = require('./auth.json');
var fs = require('fs');
var prefix = "?"
const client = bot
const pk1 = "559002320050978831"
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
    bot.sendMessage({
        to: '567372382499635201',
        message: 'im back biches :))'
    })
	
});

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with "?"
    if (message.includes('perse')) {
        bot.sendMessage({
            to: channelID,
            message: 'MEINASIKKO SANOA PERSE?! oh wait a minute...'
        })
    } else {
        if (message.includes('per')) {
            bot.sendMessage({
                to: channelID,
                message: "MEINASIKKO SANOA PERSE?!"
            })
        }
    }
    if (message.includes('pylly')) {
        bot.sendMessage({
            to: channelID,
            message: 'MEINASIKKO SANOA PYLLY?! oh wait a minute...'
        })
    } else {
        if (message.includes('py')) {
            console.log("py")
            bot.sendMessage({
                to: channelID,
                message: "MEINASIKKO SANOA PYLLY?!"
            })
        }
    }
    if (message.substring(0, 1) == prefix) {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'aasi':
				var person = bot.servers["480068654835171348"].members[userID]
				var vci = person.voice_channel_id;
				if (vci) {
				console.log(vci);
				bot.joinVoiceChannel(vci, function(error) {
					bot.getAudioContext(vci, function(error, stream) {
						fs.createReadStream('jo.mp3').pipe(stream, {end: false});
						stream.on('done', function() {
							bot.leaveVoiceChannel(vci, function(error) {
								console.log('abc')
				});
				});
				});
				});
				} else {
				bot.sendMessage ({
					to: channelID,
					message: "SAATANAN TOOPE MENE ÄÄNIKANAVALLE ;))"
				});
				}
			break;
    };
	};
});