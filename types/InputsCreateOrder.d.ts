declare interface InputsCreateOrder {
    client: string;
    email: string;
    comment: string;
    payment: string;
    shipping: string;
    source: string;
    status: string;
    products: VariationProduct[],
}