import * as appointmentDAO from './appointment-dao';
import * as utility from '../utility';

export const post = (id: string, date: string, startTime: number, endTime: number, name: string, description: string, color: string): Promise<any> => {
    return new Promise(async (resolve, reject) => {

        try {

            // print log
            utility.print(`POST /appointment | id: ${id}`);

            await appointmentDAO.create(id, date, startTime, endTime, name, description, color);

            resolve();

        } catch(error) { reject(error); }

    });
};

export const get = (id: string, week: string): Promise<any> => {
    return new Promise(async (resolve, reject) => {

        try {

            // print log
            utility.print(`GET /appointment | id: ${id} week: ${week}`);

            const year = week.substr(0, 4);
            const month = week.substr(4, 2);
            const day = week.substr(6, 2);
            const weekStr = `${year}-${month}-${day}`;

            const appointmentList: any[] = await appointmentDAO.getByWeek(id, weekStr);

            const appointmentMatrix: number[][] = [];
            for(let i = 0; i < 24; i++) appointmentMatrix.push([0, 0, 0, 0, 0, 0, 0]);

            for(const [index, value] of Object.entries(appointmentList)) {

                const weekDay = Number(value.appoint_weekday);
                const startTime = Number(value.start_time.split(':')[0]);
                const endTime = Number(value.end_time.split(':')[0]);

                appointmentMatrix[startTime][weekDay] = Number(index)+1;

                for(let i = startTime+1; i < endTime; i++) appointmentMatrix[i][weekDay] = -1;

            }

            resolve({
                list: appointmentList,
                matrix: appointmentMatrix
            });

        } catch(error) { reject(error); }

    });
};
