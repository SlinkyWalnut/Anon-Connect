import User from "./User.js"
import mongoose from "mongoose"
import CONFIG from "./config.js"

import {UserReviews} from "./updateUser.js"

const userReviews = new UserReviews();

const ItemId = '672fad70d8882875d2f03c31'
const meet = {
    name : 'Bruh',
    location : 'Princeton',
    duration: 120,
    description: 'Helping people out',
}
const eventName = meet.name;
const Review = {
    Rating : 5,
    description : 'Confusing, Not sure what to do'
}

mongoose.connect(CONFIG.MONGO_URI).then(() =>{
    userReviews.addUserReviews(User, ItemId, eventName, Review).then(() => {
        console.log('Review Added');
        mongoose.connection.close();
      })
})