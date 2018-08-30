import dotenv from 'dotenv';
import express from 'express';
import swaggerUi from 'swagger-ui-express';

import config from './config/express';
// import get from './get';

import loginController from './controllers/login';
import appProtected from './protectedEndpoints/appProtected';

dotenv.config();

const swaggerDocument = require('./swagger/swagger.json');

const app = express();
config(app);
// get(app);

app.get('/', (req, res) => {
  res.send({ message: 'heya again' });
});


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.post('/login', loginController.login);
app.use('/users', appProtected);

export default app;
