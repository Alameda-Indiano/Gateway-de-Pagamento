import TransactionModel from '../models/TransactionModel.js';
import CartModel from '../models/CartModel.js';
import { TransactionValidateSchema } from './ValidationSchemas/TransactionValidateSchema.js';
import { TransactionService } from '../services/TransactionService.js';

class TransactionsController {

    async createTransaction(req, res) {
        try {
            
            const serviceTransaction = new TransactionService();
            
            const {
                cartCode,
                paymentType,
                installments,
                customerName,
                customerEmail,
                customerMobile,
                customerDocument,
                billingAddress,
                billingNumber,
                billingNeighborhood,
                billingCity,
                billingState,
                billingZipCode,
                creditCardNumber,
                creditCardExpiration,
                creditCardHolderName,
                creditCardCvv,
            } = req.body;

            if(!(await TransactionValidateSchema.isValid(req.body))){
                return res.status(400).json({
                    error: "Error on validate schema."
                })
            };

            const cartCodeExists = await CartModel.findOne({ code: cartCode });
            
            if (!cartCodeExists) {
                return res.status(404).json({
                    error: "Cart code is not exist"
                });
            };

            let response = await serviceTransaction.process({
                cartCode,
                paymentType,
                installments,
                customer: {
                    name: customerName,
                    email: customerEmail,
                    mobile: customerMobile,
                    document: customerDocument,
                },
                billing: {
                    address: billingAddress,
                    number: billingNumber,
                    neighborhood: billingNeighborhood,
                    city: billingCity,
                    state: billingState,
                    zipCode: billingZipCode,
                },
                creditCard: {
                    number: creditCardNumber,
                    expiration: creditCardExpiration,
                    holderName: creditCardHolderName,
                    cvv: creditCardCvv,
                }
            });

            return res.status(200).json(response)

        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: 'Internal Server Error' })
        }
    };

};

export default new TransactionsController();