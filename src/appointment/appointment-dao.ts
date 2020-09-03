import * as DB from '../db';
import { Appointment } from './appointment';
import * as appointmentSQL from './appointment-sql';

export const create = (appointment: Appointment) => {
    return new Promise(async (resolve, reject) => {

        try {

            await DB.run(appointmentSQL.add(
                appointment.userId,
                appointment.date,
                appointment.startTime,
                appointment.endTime,
                appointment.name,
                appointment.description,
                appointment.color
            ));

            resolve();

        } catch(error) { reject(error); }

    });
};

export const getByWeek = (id: string, week: string): Promise<Appointment[]> => {
    return new Promise(async (resolve, reject) => {

        try {

            const appointmentList = [];

            const selectByWeek = await DB.run(appointmentSQL.selectByWeek(id, week));

            for(const item of selectByWeek) {

                appointmentList.push(new Appointment(
                    item.user_id,
                    item.app_date,
                    item.start_time,
                    item.end_time,
                    item.app_name,
                    item.app_description,
                    item.app_color
                ));

            }

            resolve(appointmentList);

        } catch(error) { reject(error); }

    });
};
