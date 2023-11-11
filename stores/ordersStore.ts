import { defineStore } from "pinia";

export const useOrdersStore = defineStore("ordersStore", () => {
    const orders = ref<Order[]>([]);
    const page = ref<number>(1);
    const keyWord = ref("");
    const endPage = ref(1);

    const sorting = ref<SortingClients>(""); // change sorting for orders
    const reverseSorting = ref<boolean>(false);


    function searchOrders(value: string) {
        keyWord.value = value;
        fetchOrders();
    }

    function fetchOrders() {
        useAuthFetch(`${useApiUrl()}/orders`, {
            body: {
                page: page.value,
                per_page: 10,
                keyword: keyWord.value,
                sort_by: sorting.value,
                reverse_sort: reverseSorting.value,
            },
        }).then((res) => {
            console.log(res);

            orders.value = res.orders;
            endPage.value = res.total_pages;
        }).catch(res => {
            console.error(res);
        });
    };

    return {
        fetchOrders,
        orders,
        searchOrders 
    }
});