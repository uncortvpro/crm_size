<script setup lang="ts">
const props = defineProps<{
  warehouseId: Warehouse["id"];
}>();

const warehousesStore = useWarehousesStore();

const products = computed<GlobalProduct[]>(
  () => warehousesStore.finishedWarehouse
);
const fetchProducts = () => warehousesStore.fetchProducts(props.warehouseId);
// const searchOrders = (keyword: string) => warehousesStore.searchOrders(keyword);

// const isOrderDetails = ref(false);
// const currentOrderId = ref("");
// const currentOrder = computed(() =>
//   orders.value.find((order) => order._id === currentOrderId.value)
// );

// const switchOrderId = (id: string) => {
//   currentOrderId.value = id;
// };

// const switchOrderDetails = (value: boolean) => {
//   isOrderDetails.value = value;
// };

// const showOrderDetails = (id: string) => {
//   switchOrderId(id);
//   switchOrderDetails(true);
// };

fetchProducts();
</script>
<template>
  <div>
    <CommonNavigationPage @search="" @add="navigateTo('new_order')">
      <template #add_name> Додати товар</template>
    </CommonNavigationPage>
    <!-- <CommonModalOrderDetails
      v-if="currentOrder"
      v-model="isOrderDetails"
      @closeModal="switchOrderDetails(false)"
      label="Деталі замовлення"
      :products="currentOrder?.products"
    ></CommonModalOrderDetails> -->

    <CommonTable>
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
