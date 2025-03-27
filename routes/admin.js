import express from 'express'; //Anytime you want to use a router , you have to import these two items
const routes = express.Router();

import { getUsers } from '../controller/admin.js';



routes.get("/users", getUsers);


export default routes;