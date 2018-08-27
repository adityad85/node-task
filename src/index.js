import debug from 'debug';
import 'babel-polyfill';
import app from './server';
import CONSTANTS from './lib/constants';

const appDebug = debug('app');

const isProduction = process.env.NODE_ENV === CONSTANTS.NODE_ENV;
const port = isProduction ? process.env.PORT : CONSTANTS.PORT;

app.listen(port, () => {
  appDebug(`Server running on port ${port}`);
});
