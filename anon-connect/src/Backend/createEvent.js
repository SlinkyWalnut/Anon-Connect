import User from "./User.js";
import mongoose from "mongoose";
import CONFIG from "./config.js";
import { UserEvents} from "./updateUser.js";

const userEvents = new UserEvents();

function createEvent(userId, event) {
    mongoose.connect(CONFIG.MONGO_URI).then(() =>{
        UserEvents.addUserEvent(User, userId, event).then(() => {
            console.log('Event Added');
            mongoose.connection.close();
          })
    })
}

export default createEvent;