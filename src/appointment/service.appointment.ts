import { Appointment, appointmentDAO } from '../appointment';
import * as utility from '../utility';

export const post = (id: string, date: string, startTime: number, endTime: number, name: string, description: string, color: string): Promise<any> => {
    return new Promise(async (resolve, reject) => {

        try {

            // print log
            utility.print(`POST /appointment | id: ${id}`);

            const appointment = new Appointment(
                0,
                id,
                date,
                startTime.toString(),
                endTime.toString(),
                name,
                description,
                color
            );

            const check = await appointmentDAO.checkOverlap(appointment);

            if(check === 0) {

                await appointmentDAO.create(appointment);

                resolve({
                    result: 101,
                    message: 'OK'
                });

            } else {

                resolve({
                    result: 201,
                    message: 'Appointment overlaps'
                });

            }

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

            const appointments: Appointment[] = await appointmentDAO.getByWeek(id, weekStr);

            const appointmentList: any[] = [];

            for(const item of appointments) {
                appointmentList.push({
                    id: item.id,
                    startTime: item.startTime,
                    endTime: item.endTime,
                    name: item.name,
                    description: item.description,
                    color: item.color
                });
            }

            const appointmentMatrix: number[][] = [];
            for(let i = 0; i < 24; i++) appointmentMatrix.push([0, 0, 0, 0, 0, 0, 0]);

            for(const [index, value] of Object.entries(appointments)) {

                const date = new Date(value.date);
                const weekDay = date.getDay() > 0 ? date.getDay()-1 : 6;

                const startTime = Number(value.startTime.split(':')[0]);
                const endTime = Number(value.endTime.split(':')[0]);

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
