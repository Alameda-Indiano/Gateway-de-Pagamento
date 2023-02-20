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

    async updatedCart(req, res) {

        try {
            const { id } = req.params;
            const { code, price } = req.body;
            
            const cart = await CartModel.findById(id);

            if (!cart) {
                return res.status(401).json({
                    error: 'Não foi possível localizar o carrinho de compras informado'
                });
            };

            let cartAfterUpdate = await CartModel.findByIdAndUpdate(id, { code, price }, { new: true });

            return res.status(200).json(cartAfterUpdate)
            
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: 'Internal Server Error' })
        };
        
    };

    async destroyCart(req, res) {

        try {
            const { id } = req.params;
            
            const cart = await CartModel.findById(id)

            if (!cart) {
                return res.status(401).json({
                    error: 'Não foi possível localizar o carrinho de compras informado'
                });
            };

            await cart.deleteOne()

            return res.status(200).json({
                message: 'Carrinho deletado com sucesso!'
            })
            
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: 'Internal Server Error' })
        };
        
    };

};

export default new CartsController();