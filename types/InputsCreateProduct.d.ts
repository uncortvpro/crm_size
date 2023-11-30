declare interface InputsCreateProduct {
    name: string,
    description: string,
    status: string,
    status_type: string,
    category: string,
    warehouse: Warehouse['name'] | "",
    subwarehouse: string,
    comment: string,
    photo: string,
    variations: VariationProduct[]
}