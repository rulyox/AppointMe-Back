import express from 'express';
import * as appointmentController from './appointment-controller';

const router = express.Router();

// Create new appointment.
router.post('/:id', appointmentController.post);

export default router;
