import CartModel from '../models/CartModel.js';

class CartsController {
    
    async getFullCarts(req, res) {

        try {
          
            const carts = await CartModel.find();

            return res.status(200).json(carts);
            
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: 'Internal Server Error' })
        };

    };

    async createCarts(req, res) {

        try {
          
            const { code, price } = req.body;

            const newCart = await CartModel.create({ code, price });

            return res.status(200).json(newCart)
            
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: 'Internal Server Error' })
        };

    };

};

export default new CartsController();