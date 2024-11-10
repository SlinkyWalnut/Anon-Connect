import Account from "./Account.js";
import mongoose from "mongoose";
import CONFIG from "./config.js";

function createAccount (name, password) {
    mongoose.connect(CONFIG.MONGO_URI)
    .then(() => {
        const newAccount = new Account ({
            username: username,
            password: password,
        })
        return newAccount.save()
    })
    .then(() => console.log('Account created'))
    .catch((err) => console.error('Error:', err));
}

export default createAccount