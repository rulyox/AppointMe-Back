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

app.listen(port, () => utility.print(`Server listening on port ${port}...`));
