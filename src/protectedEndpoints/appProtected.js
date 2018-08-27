import express from 'express';
import URLS from '../lib/urls';
import objectController from '../controllers/object';
import authService from '../services/auth.service';

const appProtected = express.Router();

// appProtected.use(URLS.home, authService.ensureAuthenticated);
console.log('hghg')
appProtected.get('/', () => console.log('33'));
appProtected.patch(URLS.object, objectController.patchObject);
appProtected.get('/status', (_, res) => {
  res.json({ success: 'i\'m ready' });
});

export default appProtected;
