import express from 'express';
import URLS from '../lib/urls';
import objectController from '../controllers/object';
import authService from '../services/auth.service';
import imageController from '../controllers/image';

const appProtected = express.Router();

appProtected.use(URLS.home, authService.ensureAuthenticated);

appProtected.patch(URLS.object, objectController.patchObject);
appProtected.get(URLS.image, imageController.sendImage);

export default appProtected;
