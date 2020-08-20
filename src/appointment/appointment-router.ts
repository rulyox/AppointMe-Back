import express from 'express';
import * as appointmentController from './appointment-controller';

const router = express.Router();

// Create new appointment.
router.post('/:id', appointmentController.post);

// Get appointments of a week.
router.get('/:id/:week', appointmentController.get);

export default router;
