import express from 'express';

const routes = express.Router();

import { uploadPicture } from '../controller/uploadPicture.js';

routes.post("/upload", uploadPicture);


export default routes;