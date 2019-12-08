function messageHandler(message){
	if(message.author.bot) return;
	if(message.content.indexOf(config.prefix) !== 0) return;

	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

	if(command === "remove-member") {
		let member = message.mentions.members.first() || message.guild.members.get(args[0]);
		if(!member)
		  return message.reply("Please mention a valid member of this server");
			// TODO: call democracy function
	}	

	if(command === "add-member") {
		// TODO: call democracy function
	}

	if(command === "change-admin") {
		// TODO: call democracy function
	}
}

module.exports.messageHandler = messageHandler;