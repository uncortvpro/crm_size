import { defineStore } from "pinia";

export const useTestStore = defineStore("testStore", () => {
    const finance = ref<any>([
        {
            _id: 1,
            date: new Date(),
            amount: '+3675₴',
            counterparty: 'Кузьменко А.',
            cash_balance: 'Замовлення',
            cash_desk: '45800₴',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipisci elit',
        },
        {
            _id: 3,
            date: new Date(),
            amount: '-3675₴',
            counterparty: 'Кузьменко А.',
            cash_balance: 'Замовлення',
            cash_desk: '45800₴',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipisci elit',
        },
        {
            _id: 2,
            date: new Date(),
            amount: '+3675₴',
            counterparty: 'Кузьменко А.',
            cash_balance: 'Замовлення',
            cash_desk: '45800₴',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipisci elit',
        }
    ]);

    const addFinance = (item: any) => {
        finance.value = [...finance.value, item]
    }

    const removeFinance = (item: any) => {
        finance.value = finance.value.filter((el: any) => el.id !== item.id)
    }


    return{
        finance
    }
});