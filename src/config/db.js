const mongoose = require('mongoose');



const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('Database Connection Error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
