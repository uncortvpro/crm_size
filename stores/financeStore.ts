import { defineStore } from "pinia";

export const useFinanceStore = defineStore("financeStore", () => {
    const transactions = ref<Transaction[]>([]);
    const page = ref<number>(1);
    const keyWord = ref("");
    const endPage = ref(1);

    const sorting = ref<SortingTransaction>("");////
    const reverseSorting = ref<boolean>(false);

    const setSorting = (value: SortingTransaction) => {
        useSorting(value, reverseSorting, sorting, fetchTransactions);
    }

    
    function searchTransactions(value: string) {
        keyWord.value = value;
        fetchTransactions();
    }

    function setPage(newPage: number) {
        if(newPage === 0) return false;
        page.value = newPage;
        
        fetchTransactions();
    }

    function deleteTransactions(id: string) {
        console.log(id);
        
        useAuthFetch(`${useApiUrl()}/delete_transaction`, {
            body: {
                transaction_id: id,
            },
        }).then(res => {
            if (res.message === true) {
                fetchTransactions();
            }
        });
    }

    function fetchTransactions() {
        useAuthFetch(`${useApiUrl()}/transactions`, {
            body: {
                page: page.value,
                per_page: 10,
                keyword: keyWord.value,
                sort_by: sorting.value,
                reverse_sort: reverseSorting.value,
            },
        }).then((res) => {
            console.log(res);
            
            transactions.value = res.transactions;
            endPage.value = res.total_pages;
        }).catch(res => {
            console.error(res);
        });
    };

return {
    fetchTransactions,
    searchTransactions,
    deleteTransactions,
    setPage,
    transactions,
    endPage,
    keyWord,
    page,
    setSorting,
    sorting,
    reverseSorting
}
})