import { defineStore } from "pinia";

export const useClientsStore = defineStore("clientsStore", () => {
    const clients = ref<Client[]>([]);
    const page = ref<number>(1);
    const keyWord = ref("");
    const endPage = ref(1);
    const sorting = ref<SortingClients>("");
    const reverseSorting = ref<boolean>(false);

    const setSorting = (value: string) => {
        useSorting(value, reverseSorting, sorting, fetchClients)
    }

    function searchClients(value: string) {
        keyWord.value = value;
        fetchClients();
    }

    function setPage(newPage: number) {
        if (newPage === 0) return false;
        page.value = newPage;

        fetchClients();
    }

    function fetchClients() {
        useAuthFetch(`${useApiUrl()}/clients`, {
            body: {
                page: page.value,
                per_page: 10,
                keyword: keyWord.value,
                sort_by: sorting.value,
                reverse_sort: reverseSorting.value,
            },
        }).then((res) => {
            console.log(res);

            clients.value = res.clients;
            endPage.value = res.total_pages;
        }).catch(res => {
            console.error(res);
        });
    };

    function deleteClient(id: string) {
        console.log(id);

        return useAuthFetch(`${useApiUrl()}/delete_client`, {
            body: {
                client_id: id,
            },
        }).then(async (res) => {
            if (res.message === 'Client deleted successfully') {
                clients.value = clients.value.filter((element) => element._id !== id);
                return res.message;
            }
            return false;
        });
    }


    return {
        clients,
        fetchClients,
        deleteClient,
        setPage,
        searchClients,
        page,
        keyWord,
        endPage,
        setSorting,
        sorting,
        reverseSorting
    }
})