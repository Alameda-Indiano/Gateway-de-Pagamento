import { Router } from "express";
const routes = new Router();

import TransactionController from "../controllers/TransactionController.js";

routes.post('/Transaction', TransactionController.createTransaction);

export default routes;