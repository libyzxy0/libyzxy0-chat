const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
	userID: {
		type: String,
		required: true
	},
	username: {
		type: String,
		required: true
	}
});

const attachmentSchema = new mongoose.Schema({
	type: String,
	url: String,
	id: String
});

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	userID: {
		type: String,
		required: true,
		unique: true
	},
	firstName: {
		type: String,
		required: true
	},
	lastName: String,
	status: {
		type: String,
		required: true
	},
	bio: String
});

const messageSchema = new mongoose.Schema({
	type: String,
	messageId: {
		type: String,
		required: true,
		unique: true
	},
	sender: {
		userID: {
			type: String,
			required: true
		},
		username: {
			type: String,
			required: true
		},
		avatarUrl: String
	},
	text: String,
	timestamp: {
		type: Number,
		required: true
	},
	status: String,
	attachments: [attachmentSchema]
});

const threadSchema = new mongoose.Schema({
	threadID: {
		type: String,
		unique: true
	},
	participants: [participantSchema],
	messages: [messageSchema],
	lastActivityTimestamp: {
		type: Number,
		required: true
	}
});

module.exports = {
	User: mongoose.model('User', userSchema),
	Thread: mongoose.model('Thread', threadSchema),
	Message: mongoose.model('Message', messageSchema)
};