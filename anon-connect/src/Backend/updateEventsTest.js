import User from "./User.js"
import mongoose from "mongoose"
import CONFIG from "./config.js"

import {UserEvents} from "./updateUser.js"

const userEvents = new UserEvents();

const ItemId = '672fad70d8882875d2f03c31'
const meet = {
    name : 'Bruh',
    location : 'Princeton',
    duration: 120,
    description: 'Helping people out',
}

mongoose.connect(CONFIG.MONGO_URI).then(() =>{
    userEvents.addUserEvents(User, ItemId, meet).then(() => {
        console.log('Event Added');
        mongoose.connection.close();
      })
})