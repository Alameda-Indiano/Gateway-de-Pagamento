import { Router } from "express";
const routes = new Router();

import CartsController from "../controllers/CartsController.js";

routes.get('/Carts', CartsController.index);

export default routes;