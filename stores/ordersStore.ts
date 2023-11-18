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


    const sorting = ref<SortingOrders>(""); // change sorting for orders
    const reverseSorting = ref<boolean>(false);
    const setSorting = (value: SortingOrders) => {// change sorting for orders
        useSorting(value, reverseSorting, sorting, fetchOrders);
    }


    function setPage(newPage: number) {
        if(newPage === 0) return false;
        page.value = newPage;
        
        fetchOrders();
    }

    function deleteOrder(id: string) {
        console.log(id);
        
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
            console.log(res);

            orders.value = res.orders;
            endPage.value = res.total_pages;
        }).catch(res => {
            console.error(res);
        });
    };


    async function fetchProducts () {
        const response = await useAuthFetch(`${useApiUrl()}/variations`, {
          body: {
            name: nameProduct.value,
          },
        })
          addingProducts.value = response.variations;
          console.log(addingProducts.value);
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