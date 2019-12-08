var contexts = [];

function add_channel(channel_uid, user_uid){
	if(contexts.every((context) => context.channel !== channel_uid)){
		contexts.push({
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
	var channelContext = contexts.find((context) => context.channel === channel_uid)
	if(channelContext !== undefined && channelContext.user_contexts.every((userContext) => userContext.user !== user_uid)){
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
	var channelContext = contexts.find((context) => context.channel === channel_uid)
	if(channelContext !== undefined){
		var index = channelContext.user_contexts.findIndex((userContext) => userContext.user === user_uid)
		if(index !== -1){
			channelContext.user_contexts.splice(index, 1)
			channelContext.user_contexts.forEach((userContext) => {
				var userMemberIndex = userContext.user_context.members.findIndex((member) => member === user_uid)
				if(userMemberIndex !== -1){
					userContext.user_context.members.splice(userMemberIndex, 1)
				}
			})
		}
	}
}

function change_admin(channel_uid, user_uid){
	var channelContext = contexts.find((context) => context.channel === channel_uid)
	if(channelContext !== undefined){
		// ADD CHECK TO SEE IF user_uid IS ACTUALLY IN THE CHANNEL
		channelContext.user_contexts.forEach((userContext) => userContext.user_context.admin = user_uid)
	}
}
