const mongoose = require('mongoose')
const { Schema, model } = mongoose;

const UserSchema = new Schema ({
    name : String,
    password : String,
    organization : String,
    description : String,
    website : String,
    contact : String,
    Events: [{
        name : String,
        location : String,
        duration: Number,
        description: String,
        speakers: [String],
        tags: [String],
        attendees: Number,
        Reviews: [{
            Rating : Number,
            description: String
        }],
        completed: Boolean
    }]
});

const User = model('User', UserSchema)
module.exports = User