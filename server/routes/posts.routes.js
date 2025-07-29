import express from 'express';
import { healthCheck } from '../controllers/posts.controller.js';
import { createPost } from '../controllers/posts.controller.js';
import { getAllPosts } from '../controllers/posts.controller.js';

const router = express.Router();

router.get('/posts/health', healthCheck);
router.post('/posts/create-post', createPost);
router.get('/posts/all-posts', getAllPosts);

export default router;