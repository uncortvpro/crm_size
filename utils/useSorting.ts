function ifIdWarehouse (value: any, reverseSorting: any, sortingCurrent: any, callback: Function, idWarehouse: Warehouse['id'], warehouseType: Function) {
    if (sortingCurrent.value[warehouseType(idWarehouse)] !== value) {
        reverseSorting.value[warehouseType(idWarehouse)] = true;
        sortingCurrent.value[warehouseType(idWarehouse)] = value;
        callback(idWarehouse);
        return false;
    }

    if (reverseSorting.value[warehouseType(idWarehouse)]) {
        reverseSorting.value[warehouseType(idWarehouse)] = false;
        callback(idWarehouse);
        return false;
    }

    if (!reverseSorting.value[warehouseType(idWarehouse)]) {
        reverseSorting.value[warehouseType(idWarehouse)] = true;
        callback(idWarehouse);
        return false;
    }
}


export function useSorting(value: any, reverseSorting: any, sortingCurrent: any, callback: Function, idWarehouse: Warehouse['id'] | null = null, warehouseType: Function | null = null) {
    if(idWarehouse && warehouseType) {
        ifIdWarehouse(value, reverseSorting, sortingCurrent, callback, idWarehouse, warehouseType)
        return false;
    }


    if (sortingCurrent.value !== value) {
        reverseSorting.value = true;
        sortingCurrent.value = value;
        callback();
        return false;
    }

    if (reverseSorting.value) {
        reverseSorting.value = false;
        callback();
        return false;
    }

    if (!reverseSorting.value) {
        reverseSorting.value = true;
        callback();
        return false;
    }
}