import express from 'express';
import * as userController from './user-controller';

const router = express.Router();

// Check login and create token.
router.post('/token', userController.postToken);

// Login using token.
router.get('/', userController.get);

// Sign up.
router.post('/', userController.post);

// Get user data.
router.get('/data/:id', userController.getData);

export default router;