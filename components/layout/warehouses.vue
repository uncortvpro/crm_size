<script setup lang="ts">
const props = defineProps<{
  warehouseId: Warehouse["id"];
}>();

const warehousesStore = useWarehousesStore();
const warehouseType = () => warehousesStore.warehouseType(props.warehouseId);
const subwarehouse = ref("");

const products = computed<GlobalProduct[]>(
  () => warehousesStore.warehouseProducts[warehouseType()]
);
const setSubwarehouse = () =>
  warehousesStore.setSubwarehouse(subwarehouse.value, props.warehouseId);

const fetchProducts = () => warehousesStore.fetchProducts(props.warehouseId);
const searchProducts = (keyword: string) =>
  warehousesStore.searchProducts(keyword, props.warehouseId);



fetchProducts();
</script>
<template>
  <div>
    <CommonNavigationPage
      @search="searchProducts"
      @add="navigateTo('new_product')"
    >
      <template #add_name> Додати товар</template>
    </CommonNavigationPage>

    <CommonTable class="bg-beige-light">
      <template #additional_elements>
        <CommonSelectSubwarehouse
          placeholder
          v-model="subwarehouse"
          @actionUpdate="setSubwarehouse"
          class="max-w-[213px] mb-[15px] 3xl:mb-[5px]"
        ></CommonSelectSubwarehouse>
      </template>
      <template #headers>
        <UiTableCellHeader></UiTableCellHeader>
        <UiTableCellHeader>Товар</UiTableCellHeader>
        <UiTableCellHeader>Статус</UiTableCellHeader>
        <UiTableCellHeader>Кількість</UiTableCellHeader>
        <UiTableCellHeader>Склади</UiTableCellHeader>
        <UiTableCellHeader>Категорія</UiTableCellHeader>
        <UiTableCellHeader>Коментар</UiTableCellHeader>
      </template>
      <template #items>
        <CommonTableItemWarehouse
          v-for="product in products"
          :key="product._id"
          :product="product"
        />
      </template>
    </CommonTable>
  </div>
</template>

<style scoped></style>
