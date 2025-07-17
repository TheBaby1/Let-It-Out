import express from 'express';
import userRoutes from './routes/users.routes.js';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/', userRoutes);

app.listen(3001, () => {
    connectDB();
    console.log('Server is running on http://localhost:3001');
});