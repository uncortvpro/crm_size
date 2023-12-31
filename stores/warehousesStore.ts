import { defineStore } from "pinia";

type warehouseProducts = {
    finishedWarehouse: GlobalProduct[],
    distributorWarehouse: GlobalProduct[],
    warehouseMaterials: GlobalProduct[],
}

export const useWarehousesStore = defineStore("warehousesStore", () => {

    const warehouses: Warehouse[] = [
        {
            id: 1,
            name: 'Склад готової продукції',
            secondName: 'finishedWarehouse'
        },
        {
            id: 2,
            name: 'Склад дистриб’ютора',
            secondName: 'distributorWarehouse'
        },
        {
            id: 3,
            name: 'Склад матеріалів',
            secondName: 'warehouseMaterials'
        }
    ]

    const allSubwarehouses = ref<Subwarehouses[]>([]);

    const subwarehouse = ref<any>({
        finishedWarehouse: "",
        distributorWarehouse: "",
        warehouseMaterials: ""
    });

    const warehouseProducts = ref<warehouseProducts>({
        finishedWarehouse: [],
        distributorWarehouse: [],
        warehouseMaterials: [],
    })

    const page = ref<any>({
        finishedWarehouse: 1,
        distributorWarehouse: 1,
        warehouseMaterials: 1
    });
    const keyWord = ref<any>({
        finishedWarehouse: "",
        distributorWarehouse: "",
        warehouseMaterials: ""
    });
    const endPage = ref<any>({
        finishedWarehouse: 1,
        distributorWarehouse: 1,
        warehouseMaterials: 1
    });

    const setSubwarehouse = (value: any, id: Warehouse['id']) => {
        subwarehouse.value[warehouseType(id)] = value;
        fetchProducts(id);
    }

    const setWarehouseProducts = (value: any, id: Warehouse['id']) => {
        warehouseProducts.value[warehouseType(id)] = value;
    }
    const setPage = (value: any, id: Warehouse['id']) => {
        if(value === 0) return false;
        page.value[warehouseType(id)] = value;

        fetchProducts(id)
    }
    const setEndPage = (value: any, id: Warehouse['id']) => {
        endPage.value[warehouseType(id)] = value;
    }


    function warehouseType (id: Warehouse['id']):Warehouse['secondName'] {
        const warehouse = warehouses.find(el => el.id === id);
        return warehouse?.secondName || warehouses[0].secondName;
    }

    function warehouseName (id: Warehouse['id']):Warehouse['name'] {
        const warehouse = warehouses.find(el => el.id === id);
        return warehouse?.name || warehouses[0].name;
    }

    type Sorting = {
        finishedWarehouse: SortingProducts
        distributorWarehouse: SortingProducts
        warehouseMaterials: SortingProducts  
    }

    const sorting = ref<Sorting>({
        finishedWarehouse: "",
        distributorWarehouse: "",
        warehouseMaterials: ""
    });
    const reverseSorting = ref<any>({
        finishedWarehouse: false,
        distributorWarehouse: false,
        warehouseMaterials: false
    });

    const setSorting = (value: SortingProducts, idWarehouse: Warehouse['id']) => {
        useSorting(value, reverseSorting, sorting, fetchProducts, idWarehouse, warehouseType);
    }

    function fetchSubwarehouses ()  {
        useAuthFetch(`${useApiUrl()}/subwarehouses`).then((res) => {
            allSubwarehouses.value = res.subwarehouses;
        });
      };

    function deleteProducts(id: string, idWarehouse: Warehouse['id']) {
        useAuthFetch(`${useApiUrl()}/delete_product`, {
            body: {
                product_id: id,
            },
        }).then(res => {
            if (res.message === true) {
                fetchProducts(idWarehouse);
            }
        });
    }

    function searchProducts(value: string, id: Warehouse['id']) {
        keyWord.value[warehouseType(id)] = value;
        fetchProducts(id);
    }

    function fetchProducts(id: Warehouse['id'], ) {
        useAuthFetch(`${useApiUrl()}/products`, {
            body: {
                page: page.value[warehouseType(id)],
                per_page: 10,
                keyword: keyWord.value[warehouseType(id)],
                warehouse: warehouseName(id),
                subwarehouse: subwarehouse.value[warehouseType(id)],
                sort_by: sorting.value[warehouseType(id)],
                reverse_sort: reverseSorting.value[warehouseType(id)],
            },
        }).then((res) => {
            setWarehouseProducts(res.products, id);
            setEndPage(res.total_pages, id)
        }).catch(res => {
            console.error(res);
        });
    };
    



    return {
        warehouseProducts,
        fetchProducts,
        searchProducts,
        warehouses,
        warehouseType,
        setSubwarehouse,
        deleteProducts,
        page,
        endPage,
        setPage,
        setSorting,
        sorting,
        reverseSorting,
        fetchSubwarehouses,
        allSubwarehouses
    }
});