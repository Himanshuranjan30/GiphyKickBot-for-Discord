
const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token, giphy_token } = require('./config.json');

var GphApiClient = require('giphy-js-sdk-core');
giphy = GphApiClient(giphy_token);

client.once('ready', () => {
	console.log('Discord bot online. Ready to create bots')
})

client.on('message', message => {
	if (message.member.hasPermission('KICK_MEMBERS')) {
		if (message.content.startsWith(`${prefix}kick`)) {
			let member = message.mentions.members.first();
			member.kick().then((member) => {

				giphy.search('gifs', { "q": "fail" })
					.then((response) => {
						var totalrespones = response.data.length;
				        var responseIndex = Math.floor((Math.random() * 10) + 1) % totalResponses;
			     	    var responsefinal = response.data[responseindex];
				        message.channel.send(member.displayName+"That person has been kicked", { files: [responsefinal.images.url] });

			}).catch(() => {message.channel.send("error");


		})
		}
			)}
}
}
			)



client.login(token);

