const config = require("../config.json");

function messageHandler(message){
	if(message.author.bot) return;
	if(message.content.indexOf(config.prefix) !== 0) return;

	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

	// TODO: remove after democracy commands are implemented
	if (command === "test") {
		return message.reply("Status: OK");
	}
	
	if (command === "remove-member") {
		let member = message.mentions.members.first() || message.guild.members.get(args[0]);
		if(!member)
		  return message.reply("Please mention a valid member of this server");
		// TODO: call democracy function
	}	

	if (command === "add-role") {
		let member = message.mentions.members.first() || message.guild.members.get(args[0]);
		if(!member)
		  return message.reply("Please mention a valid member of this server");
		
		let role = message.guild.roles.find(role => role.name === args[1]);
		if (!role)
	    	return console.log("The role does not exist");
		
		if (member.roles.has(role.id))
			return message.reply("Member already has the " + role.name + " role.");

		member.addRole(role).catch(console.error);
		return message.reply(role.name + " added to " + member);
	}

	if (command === "remove-role") {
		let member = message.mentions.members.first() || message.guild.members.get(args[0]);
		if(!member)
		  return message.reply("Please mention a valid member of this server");
		
		let role = message.guild.roles.find(role => role.name === args[1]);
		if (!role)
	    	return console.log("The role does not exist");
		
		if (!member.roles.has(role.id))
			return message.reply("Member doesn't have the " + role.name + " role.");

		member.removeRole(role).catch(console.error);
		return message.reply(role.name + " removed from " + member);
	}

	if (command === "add-member") {
		// TODO: call democracy function
	}

	if (command === "change-admin") {
		// TODO: call democracy function
	}
}

module.exports.handleMessage = messageHandler;