import { Router } from "express";
const routes = new Router();

import CartsController from "../controllers/CartsController.js";

routes.get('/Carts', CartsController.getFullCarts);
routes.post('/Carts', CartsController.createCarts);

export default routes;