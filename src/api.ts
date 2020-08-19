import express from 'express';
import userRouter from './user/user-router';
import appointmentRouter from './appointment/appointment-router';

const router = express.Router();

router.use('/user', userRouter);
router.use('/appointment', appointmentRouter);

export default router;
