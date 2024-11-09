const mongoose = require('mongoose');
mongoose.set('debug', true);
async function testConnection() {
  try {
    

    await mongoose.connect('mongodb+srv://SlinkyWalnut:4RbvrtDxFucDkQLl@cluster0.efc7y.mongodb.net/cluster0');
    console.log('Connected successfully to MongoDB');
  } catch (err) {
    console.error('Connection error:', err.message, err);
  } finally {
    mongoose.connection.close();
  }
}

testConnection();