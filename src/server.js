import dotenv from 'dotenv';
import express from 'express';
import debug from 'debug';

import config from './config/express';
// import get from './get';

import loginController from './controllers/login';
import appProtected from './protectedEndpoints/appProtected';

dotenv.config();

const appDebug = debug('app');
const app = express();
config(app);

app.get('/', (req, res) => {
  appDebug('A response by the server');
  res.send({ message: 'heya again' });
});

app.post('/login', loginController.login);
app.use('/users', appProtected);

export default app;
