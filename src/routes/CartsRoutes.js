import { Router } from "express";
const routes = new Router();

import CartsController from "../controllers/CartsController.js";

routes.get('/Carts', CartsController.getFullCarts);
routes.post('/Carts', CartsController.createCarts);
routes.put('/Carts/:id', CartsController.updatedCart);
routes.delete('/Carts/:id', CartsController.destroyCart);

export default routes;