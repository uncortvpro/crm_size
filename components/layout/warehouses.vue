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
const searchOrders = (keyword: string) =>
  warehousesStore.searchProducts(keyword, props.warehouseId);

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
    <CommonNavigationPage @search="searchOrders" @add="navigateTo('new_order')">
      <template #add_name> Додати товар</template>
    </CommonNavigationPage>
    <!-- <CommonModalOrderDetails
      v-if="currentOrder"
      v-model="isOrderDetails"
      @closeModal="switchOrderDetails(false)"
      label="Деталі замовлення"
      :products="currentOrder?.products"
    ></CommonModalOrderDetails> -->

    <CommonTable class="bg-beige-light">
      <template #additional_elements>
        <CommonSelectSubwarehouse
          v-model="subwarehouse"
          @actionUpdate="setSubwarehouse"
          class="max-w-[213px]"
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
