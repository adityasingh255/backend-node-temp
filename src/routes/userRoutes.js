const express = require('express');
const router = express.Router();
const controllers = require('../controllers/userController');


// GET all users
router.get('/get-user', controllers.getUsers);

// POST a new user
router.post('/', controllers.createUser);

module.exports = router;
