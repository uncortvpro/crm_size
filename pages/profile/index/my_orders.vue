<script setup lang="ts">
const ordersStore = useOrdersStore();

const orders = computed(() => ordersStore.orders);
const fetchOrders = () => ordersStore.fetchOrders();
const searchOrders = (keyword: string) => ordersStore.searchOrders(keyword);

const isOrderDetails = ref(false);
const currentOrderId = ref("");
const currentOrder = computed(() =>
  orders.value.find((order) => order._id === currentOrderId.value)
);

const switchOrderId = (id: string) => {
  currentOrderId.value = id;
};

const switchOrderDetails = (value: boolean) => {
  isOrderDetails.value = value;
};

const showOrderDetails = (id: string) => {
  switchOrderId(id);
  switchOrderDetails(true);
};

fetchOrders();
</script>

<template>
  <LayoutProfilePage title="Мої замовлення">
    <template #content>
      <CommonNavigationPage
        @search="searchOrders"
        @add="navigateTo('new_order')"
      >
        <template #add_name> Додати замовлення</template>
      </CommonNavigationPage>

      <CommonModalOrderDetails
        v-if="currentOrder"
        v-model="isOrderDetails"
        @closeModal="switchOrderDetails(false)"
        label="Деталі замовлення"
        :products="currentOrder?.products"
      ></CommonModalOrderDetails>

      <CommonTable>
        <template #headers>
          <UiTableCellHeader>№ </UiTableCellHeader>
          <UiTableCellHeader>Дата замовлення</UiTableCellHeader>
          <UiTableCellHeader>Клієнт</UiTableCellHeader>
          <UiTableCellHeader>Сума замовлення</UiTableCellHeader>
          <UiTableCellHeader>Джерело замовлення</UiTableCellHeader>
          <UiTableCellHeader>Статус</UiTableCellHeader>
          <UiTableCellHeader>Оплата</UiTableCellHeader>
        </template>
        <template #items>
          <CommonTableItemOrders
            v-for="order in orders"
            :key="order._id"
            :order="order"
            @showDetails="showOrderDetails"
          />
        </template>
      </CommonTable>
    </template>
  </LayoutProfilePage>
</template>

<style scoped></style>
