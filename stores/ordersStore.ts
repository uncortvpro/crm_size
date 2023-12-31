import { log } from "console";
import { defineStore } from "pinia";

export const useOrdersStore = defineStore("ordersStore", () => {
    const orders = ref<Order[]>([]);
    const page = ref<number>(1);
    const keyWord = ref("");
    const endPage = ref(1);

    const addingProducts = ref([]); 
    const nameProduct = ref<string>("");
    function searchProducts (name: string) {
        nameProduct.value = name;
        fetchProducts();
    }


    const sorting = ref<SortingOrders>(""); 
    const reverseSorting = ref<boolean>(false);
    const setSorting = (value: SortingOrders) => {
        useSorting(value, reverseSorting, sorting, fetchOrders);
    }


    function setPage(newPage: number) {
        if(newPage === 0) return false;
        page.value = newPage;
        
        fetchOrders();
    }

    function deleteOrder(id: string) {
        
        useAuthFetch(`${useApiUrl()}/delete_order`, {
            body: {
                order_id: id,
            },
        }).then(res => {
            if (res.message === true) {
                fetchOrders();
            }
        });
    }

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
            orders.value = res.orders;
            endPage.value = res.total_pages;
        }).catch(res => {
            console.error(res);
        });
    };


    async function fetchProducts () {
        const response = await useAuthFetch(`${useApiUrl()}/products`, {
            body: {
                keyword: nameProduct.value
            },
        })
          addingProducts.value = response.products;
      };

    return {
        fetchOrders,
        addingProducts,
        searchProducts,
        orders,
        searchOrders,
        setPage,
        deleteOrder,
        page,
        endPage,
        sorting,
        reverseSorting,
        setSorting
    }
});