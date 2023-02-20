import CartModel from "../models/CartModel.js";
import TransactionModel from "../models/TransactionModel.js";
import { v4 as uuIdV4 } from 'uuid';

export class TransactionService {

    async process({
        cartCode,
        paymentType,
        installments, 
        customer,
        billing,
        creditCard
    }) {

        const cart = await CartModel.findOne({ code: cartCode });
        
        if (!cart) throw `Cart ${cartCode} was not found.`;

        const newTransaction = await TransactionModel.create({ 
            cartCode,
            code: uuIdV4(),
            total: cart.price,
            paymentType,
            installments,
            status: "started",
            customerName: customer.name,
            customerMobile: customer.mobile,
            customerEmail: customer.email,
            customerDocument: customer.document,
            billingAddress: billing.address,
            billingCity: billing.city,
            billingNeighborhood: billing.neighborhood,
            billingNumber: billing.number,
            billingState: billing.state,
            billingZipCode: billing.zipCode
        })

        return newTransaction

    };

};
