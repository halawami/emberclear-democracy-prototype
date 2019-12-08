var context = [];

function add_channel(channel_uid, user_uid){
	if(context.every((item) => item.channel !== channel_uid)){
		context.push({
			"channel": channel_uid,
			"user_contexts": [{
				"user": user_uid,
		        "user_context": {
		        	"admin": user_uid,
		        	"members": [
		            	user_uid
		          	]
		        }
			}]
		})
	}	
}

function add_user(channel_uid, user_uid){
	var channelContext = context.find((item) => item.channel === channel_uid)
	if(channelContext !== undefined && channelContext.every((item) => item.user !== user_uid)){
		channelContext.user_contexts.push({
			"user": user_uid,
			"user_context": {
				"admin": "FILL THESE TWO IN USING DEMOCRACY ALGO",
				"members": []
			}
		})
	}
}

function delete_user(channel_uid, user_uid){
	var channelContext = context.find((item) => item.channel === channel_uid)
	if(channelContext !== undefined){
		var index = channelContext.findIndex((item) => item.user === user_uid)
		if(index !== -1){
			channelContext.splice(index, 1)
			channelContext.user_contexts.forEach((item) => {
				var userMemberIndex = item.user_context.members.findIndex((member) => member === user_uid)
				if(userMemberIndex !== -1){
					item.user_context.members.splice(userMemberIndex, 1)
				}
			})
		}
	}
}

function change_admin(channel_uid, user_uid){
	var channelContext = context.find((item) => item.channel === channel_uid)
	if(channelContext !== undefined){
		// ADD CHECK TO SEE IF user_uid IS ACTUALLY IN THE CHANNEL
		channelContext.user_contexts.forEach((item) => item.user_context.admin = user_uid)
	}
}
