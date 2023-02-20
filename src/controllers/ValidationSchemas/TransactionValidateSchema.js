import * as yup from 'yup';
import parsePhoneNumber from 'libphonenumber-js';
import { cpf, cnpj } from 'cpf-cnpj-validator';

export const TransactionValidateSchema = yup.object({
                
    cartCode: yup.string().required(),
    paymentType: yup.mixed().oneOf([ "billet","credit_card"]).required(),

    installments: yup.number()
        .min(1)
        .when("paymentType", (paymentType, schema) => {
            if (paymentType == "credit_card") return schema.max(12)
            if (paymentType == "billet") return schema.max(1)
        }),

    customerName: yup.string()
        .required()
        .min(3)
        .test("is-valid-name-surname", "${path} necessary to enter first and last name", (value) => {
            let [name, surname] = value.split(' ');
            if (!name || !surname) return false; 
            if (surname.length < 3) return false;
            return true;
        }),
    customerEmail: yup.string().required().email(),

    customerMobile: yup.string()
        .required()
        .test("is-valid-mobile", "${path} is not a mobile number", (number) => parsePhoneNumber(number, "BR").isValid()),

    customerDocument: yup.string()
        .required()
        .test("is-valid-document", "${path} is not a valid CPF / CPNJ", (number) => cpf.isValid(number) || cnpj.isValid(number)),
    
    billingAddress: yup.string().required(),
    billingNumber: yup.string().required(),
    billingNeighborhood: yup.string().required(),
    billingCity: yup.string().required(),
    billingState: yup.string().required(),
    billingZipCode: yup.string().required(),    

    creditCardNumber: yup.string()
        .when("paymentType", (paymentType, schema) => {
            if (paymentType == "credit_card") return schema.required()
            if (paymentType == "billet") return schema
        }),

    creditCardExpiration: yup.string()
        .when("paymentType", (paymentType, schema) => {
            if (paymentType == "credit_card") return schema.required()
            if (paymentType == "billet") return schema
        }),

    creditCardHolderName: yup.string()
        .when("paymentType", (paymentType, schema) => {
            if (paymentType == "credit_card") return schema.required()
            if (paymentType == "billet") return schema
        }),

    creditCardCvv: yup.string()
        .when("paymentType", (paymentType, schema) => {
            if (paymentType == "credit_card") return schema.required()
            if (paymentType == "billet") return schema
        }),
    
});