const express = require("express");
const router = express.Router();
const User = require('../models/User');

// Create a new user
router.post('/', async (req, res) => {
    const { name, age, dob, password, gender, about } = req.body;

    if (!name || !age || !dob || !password || !gender) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    
    try {
        const existingUser = await User.findOne({ name });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const user = new User({
            name,
            age,
            dob,
            password,
            gender,
            about
        });

        await user.save();
        return res.status(201).json(user);
    } catch (error) {
        console.error("Error creating user:", error); // Log the complete error object
        return res.status(500).json({ message: 'Server error', error: error.message }); // Include the error message in response
    }
});
// Read users
router.get('/', async (req, res) => {
    try {
        const { name } = req.query; // Read from query parameters
        const users = name ? await User.find({ name }) : await User.find(); // Find by name if provided
        return res.json(users);
    } catch (error) {
        console.error("Error fetching users:", error); // Log the error
        return res.status(500).json({ message: 'Server error' });
    }
});

// Update user by ID
router.put('/:id', async (req, res) => {
    const { name, age, dob, password, gender, about } = req.body;
    try {
        const user = await User.findByIdAndUpdate(req.params.id, {
            name,
            age,
            dob,
            password,
            gender,
            about,
        }, { new: true });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.json(user);
    } catch (error) {
        console.error("Error updating user:", error); // Log the error
        return res.status(500).json({ message: 'Server error' });
    }
});

// Delete user by ID
router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.json({ message: 'User deleted' });
    } catch (error) {
        console.error("Error deleting user:", error); // Log the error
        return res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;