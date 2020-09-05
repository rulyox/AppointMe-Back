import express from 'express';
import { appointmentService } from '../appointment';

/*
Create new appointment.

Request Param
id: string

Request Body JSON
date: string
startTime: number
endTime: number
name: string
description: string
color: string

Response JSON
list: array
matrix: array
*/
export const post = async (request: express.Request, response: express.Response, next: express.NextFunction) => {

    try {

        // parse request
        const id = request.params.id;
        const date = request.body.date;
        const startTime = request.body.startTime;
        const endTime = request.body.endTime;
        const name = request.body.name;
        const description = request.body.description;
        const color = request.body.color;

        // type check
        if(id === null || typeof date !== 'string' || typeof startTime !== 'number'|| typeof endTime !== 'number' || typeof name !== 'string' || typeof description !== 'string' || typeof color !== 'string') {
            response.status(400).end();
            return;
        }

        // response
        const result = await appointmentService.post(id, date, startTime, endTime, name, description, color);
        response.json(result);

    } catch(error) { next(error); }

};

/*
Get appointments of a week.

Request Param
id: string
week: number
*/
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