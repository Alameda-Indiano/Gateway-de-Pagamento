import express from 'express';
import cors from 'cors';

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
        //this.express.use('/route', controllers)
    };

};

export default new AppController().express;