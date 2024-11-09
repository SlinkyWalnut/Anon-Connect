import User from "./User.js";
import mongoose from "mongoose";
import CONFIG from "./config.js";
import { UserEvents} from "./updateUser.js";

const userEvents = new UserEvents();

function deleteEvent(userId, eventId) {
    mongoose.connect(CONFIG.MONGO_URI).then(() =>{
        UserEvents.deleteUserEvent(User, userId, eventId).then(() => {
            console.log('Review Added');
            mongoose.connection.close();
          })
    })
}

export default deleteEvent;