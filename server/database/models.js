const mongoose = require('mongoose');

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
  accountConfirmed: Boolean, 
  email: {
    type: String, 
    required: true
  }, 
	status: String,
	bio: String
});

const messageSchema = new mongoose.Schema({
	type: String,
	messageID: {
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
  recipient: {
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

module.exports = {
	User: mongoose.model('User', userSchema),
	Message: mongoose.model('Message', messageSchema)
};