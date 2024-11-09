import User from "./User.js";
import mongoose from "mongoose";
import CONFIG from "./config.js";
import { UserEvents } from "./updateUser.js";

const userEvents = new UserEvents();

const itemId = '672fad70d8882875d2f03c31';
const meet = {
    name : 'Bruh',
    location : 'Princeton',
    duration: 120,
    description: 'Helping people out',
}

const eventId = meet._id;

mongoose.connect(CONFIG.MONGO_URI).then(() =>{
    
    userEvents.deleteUserEvents(User, itemId, eventId).then(() => {
        console.log('Event Deleted');
        mongoose.connection.close();
      })
})