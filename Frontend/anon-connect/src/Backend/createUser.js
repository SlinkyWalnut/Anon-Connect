import User from "./User.js";
import mongoose from "mongoose";
import CONFIG from "./config.js"

function newUser (name, password, organization, description)  {
   return new User ({
       name: name,
   password: password,
   organization: organization,
   description: description,
   })
};

function createUser (name, password, organization, description) {
    mongoose.connect(CONFIG.MONGO_URI)
    .then(() => {


    const Company = newUser(name, password, organization, description);


    return Company.save();
    })
    .then(() => console.log('User added to database'))
    .catch((err) => console.error('Error:', err));
};

export default createUser