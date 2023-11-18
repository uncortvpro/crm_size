declare interface Warehouse {
    id: number;
    name: 'Склад готової продукції' | 'Склад дистриб’ютора' | 'Склад матеріалів';
    secondName: 'finishedWarehouse' | 'distributorWarehouse' | 'warehouseMaterials';
}