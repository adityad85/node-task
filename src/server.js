import dotenv from 'dotenv';
import express from 'express';

import config from './config/express';
// import get from './get';

import loginController from './controllers/login';
import appProtected from './protectedEndpoints/appProtected';

dotenv.config();

const app = express();
config(app);
// get(app);

app.get('/', (req, res) => {
  res.send({ message: 'heya again' });
});

app.post('/login', loginController.login);
app.use('/users', appProtected);

export default app;
