import mongoose from 'mongoose';
import CONFIG from './config.js';
import createUser from './CreateUser.js';




mongoose.connect(CONFIG.MONGO_URI)
.then(() => {


const Company = createUser('Function Test 2', 'NewPassword', 'Test Org 2', 'Company that helps people');


   return Company.save();
})
.then(() => console.log('User added to database'))
.catch((err) => console.error('Error:', err));
