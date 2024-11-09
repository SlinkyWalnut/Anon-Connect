const mongoose =  require('mongoose')
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

mongoose.connect('mongodb+srv://bolajioalabi:aO7GZth0DZ2bzkAF@cluster0.efc7y.mongodb.net/')
.then(() => {

const Company = new User({
    name: 'Test',
    password: 'password',
    organization: 'Unaffiliated',
    description: 'testing db',
    Events: [{
        name: 'test event 1',
        location : 'here',
        duration: '60',
        description: ' event 1',
        attendees: 4,
        completed : 'false'
    }, {
        name: 'test event 1',
        location : 'here',
        duration: '60',
        description: ' event 1',
        attendees: 4
    }]
});

    return Company.save();
})
.then(() => console.log('User added to database'))
.catch((err) => console.error('Error:', err));