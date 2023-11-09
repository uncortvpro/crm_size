import { defineStore } from "pinia";

export const useObjectivesStore = defineStore("objectivesStore", () => {
    const objectives = ref<Objective[]>([]);
    const page = ref<number>(1);
    const keyWord = ref("");
    const endPage = ref(1);

    
    function searchObjectives(value: string) {
        keyWord.value = value;
        fetchObjectives();
    }

    function setPage(newPage: number) {
        if(newPage === 0) return false;
        page.value = newPage;
        
        fetchObjectives();
    }

    function deleteObjectives(id: string) {
        console.log(id);
        
        useAuthFetch(`${useApiUrl()}/delete_task`, {
            body: {
                client_id: id,
            },
        }).then(res => {
            console.log(res);
            
            if (res.message === 'Client deleted successfully') {
                // objectives.value = objectives.value.filter((element) => element._id.$oid !== id);
            }
        });
    }

    function fetchObjectives() {
        useAuthFetch(`${useApiUrl()}/tasks`, {
            body: {
                page: page.value,
                per_page: 10,
                keyword: keyWord.value,
            },
        }).then((res) => {
            console.log(res);
            
            objectives.value = res.tasks;
            endPage.value = res.total_pages;
        }).catch(res => {
            console.error(res);
        });
    };

return {
    fetchObjectives,
    objectives
}
})