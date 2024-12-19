const userModel = require('../models/userModel');

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await userModel.find(); 
    return res.status(200).json({
      message: 'Users fetched successfully',
      data: users,
    });
  } catch (error) {
    console.error('Error fetching users:', error.message);
    return res.status(500).json({
      message: 'Server error',
      error: error.message,
    });
  }
};
// Create a new user
exports.createUser = async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: 'Name and email are required' });
  }

  try {
    const user = new userModel({ name, email });

    const savedUser = await user.save();

    return res.status(201).json({ 
      message: 'User created successfully', 
      data: savedUser 
    });
  } catch (error) {
    console.error('Error creating user:', error.message);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};



