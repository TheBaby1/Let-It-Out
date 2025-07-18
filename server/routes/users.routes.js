import express from 'express';
import { healthCheck } from '../controllers/users.controller.js';
import { createUser } from '../controllers/users.controller.js';
import { getAllUsers } from '../controllers/users.controller.js';
import { deleteUserById } from '../controllers/users.controller.js';
import { updateUserById } from '../controllers/users.controller.js';

const router = express.Router();

router.get('/health', healthCheck);
router.post('/users/create-user', createUser);
router.get('/users/get-all-users', getAllUsers);
router.delete('/users/delete-user/:id', deleteUserById);
router.put('/users/update-user/:id', updateUserById);

export default router;