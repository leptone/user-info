var mongoose = require('mongoose')
	Schema = mongoose.Schema
	
var userSchema = new Schema ({
	username: String,
	password: String,
	created: String 
})

mongoose.model('User', userSchema)
