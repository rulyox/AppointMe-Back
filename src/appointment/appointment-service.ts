import * as appointmentDAO from './appointment-dao';
import * as utility from '../utility';

export const post = (id: string, date: string, startTime: number, endTime: number, name: string, description: string, unavailable: boolean): Promise<any> => {
    return new Promise(async (resolve, reject) => {

        try {

            // print log
            utility.print(`POST /appointment | id: ${id}`);

            await appointmentDAO.create(id, date, startTime, endTime, name, description, unavailable);

            resolve();

        } catch(error) { reject(error); }

    });
};
