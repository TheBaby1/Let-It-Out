import User from '../models/user.model.js';

export const healthCheck = (req, res) => {
    res.status(200).json({ message: 'Server is healthy' });
}

export const createUser = async (req, res) => {
    const user = req.body;

    try {
        const newUser = new User(user);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error: error.message });
    }
}