import User from '../models/user.model.js';

export const healthCheck = (req, res) => {
    res.status(200).json({ message: 'Server is healthy' });
}

export const createUser = async (req, res) => {
    const user = req.body;

    console.log('Received user:', req.body);

    try {
        const newUser = new User(user);
        await newUser.save();

        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error creating user:', error);
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

export const deleteUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error: error.message });
    }
}

export const updateUserById = async (req, res) => {
    const { id } = req.params;
    const updatedUser = req.body;

    try {
        const user = await User.findByIdAndUpdate(id, updatedUser);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
        res.status(500).json({ message : 'Error updating user', error: error.message });
    }
}