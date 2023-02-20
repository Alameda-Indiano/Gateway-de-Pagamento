import 'dotenv/config';
import './DataBase/index.js'

import express from 'express';
import cors from 'cors';

import { Routes } from './routes/Routes.js';

class AppController {

    constructor() {
        this.express = express();
        this.middlewares();
        this.routes();
    };

    middlewares() {
        this.express.use(express.json());
        this.express.use(cors({
            methods: '[GET, POST, DELETE, PUT]',
            origin: '*',
            allowedHeaders: 'Content-Type, Authorization',
            optionsSuccessStatus: 204
        }))
    };

    routes() {
        this.express.use(Routes.CartsRoutes)
    };

};

export default new AppController().express;