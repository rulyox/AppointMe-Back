import express from 'express';
import bodyParser from 'body-parser';
import API from './api';
import * as utility from './utility';

// express app
const app = express();
const port = 8080;

// middleware
app.use(bodyParser.json());

// route
app.use('/api', API);

app.listen(port, () => utility.print(`Server listening on port ${port}...`));
