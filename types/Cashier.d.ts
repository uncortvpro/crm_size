declare interface Cashier {
    expenses: number;
    balance: number;
    incomes: number;
    name: string;
    type?: 'Готівкова' | 'Безготівкова' | '';
    _id?: string;
}
