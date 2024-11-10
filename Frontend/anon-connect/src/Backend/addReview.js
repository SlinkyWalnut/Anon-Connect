import User from "./User.js";
import mongoose from "mongoose";
import CONFIG from "./config.js";
import { UserReviews } from "./updateUser.js";

const userReviews = new UserReviews();

function addReview(userId, eventId, Review) {
    mongoose.connect(CONFIG.MONGO_URI).then(() =>{
        userReviews.addUserReviews(User, userId, eventId, Review).then(() => {
            console.log('Review Added');
            mongoose.connection.close();
          })
    })
}

export default addReview;