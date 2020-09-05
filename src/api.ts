import express from 'express';
import userRouter from './user/router.user';
import appointmentRouter from './appointment/router.appointment';

const router = express.Router();

router.use('/user', userRouter);
router.use('/appointment', appointmentRouter);

export default router;
