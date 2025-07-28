import Post from "../models/post.model.js";
import User from "../models/user.model.js"

export const healthCheck = (req, res) => {
    res.status(200).json({ message: 'This route is working.'});
}

export const createPost = async (req, res) => {
    try {
        const {userId, content } = req.body;
        const userExists = await User.findById(userId);

        if (!userExists) {
            return res.status(201).json({ message: 'User does not exist' });
        }

        const newPost = new Post({ user: userId, content });
        await newPost.save();

        res.status(200).json(newPost);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}