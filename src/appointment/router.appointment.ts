import express from 'express';
import { appointmentController } from '../appointment';

const router = express.Router();

// Create new appointment.
router.post('/:id', appointmentController.post);

// Get appointments of a week.
router.get('/:id/:week', appointmentController.get);

// Delete appointment.
router.delete('/:id', appointmentController.deleteAppointment);

export default router;
