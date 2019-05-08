const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = "st!"

/*
for no @
msg.channel.send

for @
msg.reply

keep this in case of new commands
if (message.Author === user.client) return;
*/

client.on('ready', () => {
    // Set bot status to: "Playing with JavaScript"
    client.user.setActivity("The EDM World", {type: "PLAYING"})
})

client.on('ready', () => {
	console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
 });
 
client.on("message", async message => {
	if (msg.content === prefix + "help") {
		msg.reply("Command List")
	}
});

client.login("MzEwOTc2OTcwNjAxMTM2MTI4.XL1UDA.acbYg_46VOOHA1iaBWUigkI7lI0")