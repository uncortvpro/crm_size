declare interface Transaction {
    type: 'З рахунку' | 'На рахунок' | '';
    total_left: number;
    sum: number;
    date: any;
    counterpartie: any;
    comment: string;
    category: string;
    _id: string;
    cashier: string;
    recuring?: InputsTransaction['recuring'],
    periodicity?: InputsTransaction['periodicity'],
}