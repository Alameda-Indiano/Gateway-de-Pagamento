class CartsController {
    index(req, res) {
        return res.status(200).json({
            foo: 'teste'
        })
    }
};

export default new CartsController();