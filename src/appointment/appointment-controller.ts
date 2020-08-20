import express from 'express';
import * as appointmentService from './appointment-service';

export const post = async (request: express.Request, response: express.Response, next: express.NextFunction) => {

    try {

        // parse request
        const id = request.params.id;
        const date = request.body.date;
        const startTime = request.body.startTime;
        const endTime = request.body.endTime;
        const name = request.body.name;
        const description = request.body.description;
        const unavailable = request.body.unavailable;

        // type check
        if(id === null || typeof date !== 'string' || typeof startTime !== 'number'|| typeof endTime !== 'number' || typeof name !== 'string' || typeof description !== 'string' || typeof unavailable !== 'boolean') {
            response.status(400).end();
            return;
        }

        // response
        const result = await appointmentService.post(id, date, startTime, endTime, name, description, unavailable);
        response.json(result);

    } catch(error) { next(error); }

};

export const get = async (request: express.Request, response: express.Response, next: express.NextFunction) => {

    try {

        // parse request
        const id = request.params.id;
        const week = request.params.week;

        // type check
        if(id === null || isNaN(Number(week))) {
            response.status(400).end();
            return;
        }

        // response
        const result = await appointmentService.get(id, week);
        response.json(result);

    } catch(error) { next(error); }

};
