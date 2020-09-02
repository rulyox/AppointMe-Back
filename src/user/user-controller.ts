import express from 'express';
import * as userService from './user-service';

/*
Check login and create token.

Request Body JSON
id: string
pw: string

Response JSON
token: string
*/
export const postToken = async (request: express.Request, response: express.Response, next: express.NextFunction) => {

    try {

        // parse request
        const id = request.body.id;
        const pw = request.body.pw;

        // type check
        if(typeof id !== 'string' || typeof pw !== 'string') {
            response.status(400).end();
            return;
        }

        // response
        const result = await userService.postToken(id, pw);
        response.json(result);

    } catch(error) { next(error); }

};

/*
Login using token.

Request Header
token: string

Response JSON
id: string
*/
export const get = async (request: express.Request, response: express.Response, next: express.NextFunction) => {

    try {

        // parse request
        const token = request.headers.token;

        // type check
        if(typeof token !== 'string') {
            response.status(400).end();
            return;
        }

        // response
        const result = await userService.get(token);
        response.json(result);

    } catch(error) { next(error); }

};

/*
Sign up.

Request Body JSON
id: string
name: string
pw: string
*/
export const post = async (request: express.Request, response: express.Response, next: express.NextFunction) => {

    try {

        // parse request
        const id = request.body.id;
        const name = request.body.name;
        const pw = request.body.pw;

        // type check
        if(typeof id !== 'string' || typeof name !== 'string' || typeof pw !== 'string') {
            response.status(400).end();
            return;
        }

        // response
        const result = await userService.post(id, name, pw);
        response.json(result);

    } catch(error) { next(error); }

};

/*
Get user data.

Request Param
id: string

Response JSON
name: string
*/
export const getData = async (request: express.Request, response: express.Response, next: express.NextFunction) => {

    try {

        try {

            // parse request
            const id = request.params.id;

            // type check
            if(id === null) {
                response.status(400).end();
                return;
            }

            // response
            const result = await userService.getData(id);
            response.json(result);

        } catch(error) { next(error); }

    } catch(error) { next(error); }

};
