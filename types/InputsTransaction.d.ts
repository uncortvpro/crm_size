declare interface InputsTransaction {
    type: Transaction['type'];
    sum: string;
    date: any;
    counterpartie: string;
    comment: string;
    category: string;
    cashier: string;
    recuring?: boolean,
    periodicity: 7 | 30,
}