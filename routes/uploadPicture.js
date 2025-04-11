import express from 'express';
import multer from 'multer';

const upload = multer({ storage: multer.memoryStorage() });

const routes = express.Router();

import { uploadPicture } from '../controller/uploadPicture.js';

routes.post("/upload", upload.single("image"), uploadPicture);


export default routes;