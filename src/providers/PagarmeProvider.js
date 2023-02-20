class PagarmeProvider {
    
    async process({
        transactionCode,
        total,
        paymentType,
        installments, 
        customer,
        billing,
        creditCard
    }) {

        const billetParams = {
            payment_method: "boleto",
            
        };

        const transactionParams = {

        };

    };
    
};

export default PagarmeProvider();
