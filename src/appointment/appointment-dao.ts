import * as DB from '../db';
import * as appointmentSQL from './appointment-sql';

export const create = (id: string, date: string, startTime: number, endTime: number, name: string, description: string, unavailable: boolean) => {
    return new Promise(async (resolve, reject) => {

        try {

            await DB.run(appointmentSQL.add(id, date, startTime, endTime, name, description, unavailable));

            resolve();

        } catch(error) { reject(error); }

    });
};
