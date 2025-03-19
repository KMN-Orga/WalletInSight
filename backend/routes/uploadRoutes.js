import express from 'express';
import * as uploadController from '../controllers/uploadController.js';

const router = express.Router();

router.get('/', uploadController.getUpload);

export default router;
