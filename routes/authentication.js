import express from 'express';

const routes = express.Router();
import { registration } from '../controller/authentication.js';


routes.post("/register", registration);


export default routes;