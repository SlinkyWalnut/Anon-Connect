import mongoose from "mongoose";

const {Schema, model} = mongoose;

const AccountSchema = new Schema ({
    username: String,
    password : String
})

const Account = model('Account', AccountSchema)
export default Account