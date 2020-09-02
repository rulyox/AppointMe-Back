import express from 'express';
import bodyParser from 'body-parser';
import API from './api';
import * as utility from './utility';
import serverConfig from '../config/server.json';

// express app
const app = express();
const port = serverConfig.port;

// middleware
app.use(bodyParser.json());

// route
app.use('/api', API);

// error handler
app.use((error: Error, request: express.Request, response: express.Response, next: express.NextFunction) => {
    utility.print(`Error\n${error}`);
    response.status(500).end();
});

app.listen(port, () => utility.print(`Server listening on port ${port}...`));
