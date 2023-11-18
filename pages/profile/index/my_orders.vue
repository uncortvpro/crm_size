<script setup lang="ts">
const ordersStore = useOrdersStore();

const orders = computed(() => ordersStore.orders);
const fetchOrders = () => ordersStore.fetchOrders();
const searchOrders = (keyword: string) => ordersStore.searchOrders(keyword);
const currentOrderId = ref("");

const sorting = computed(() => ordersStore.sorting);
const reverseSorting = computed(() => ordersStore.reverseSorting);
const setSorting = (sorting: SortingOrders) => {
  ordersStore.setSorting(sorting);
};

const page = computed(() => ordersStore.page);
const endPage = computed(() => ordersStore.endPage);
const setPage = (page: number) => ordersStore.setPage(page);
const deleteOrder = async () => {
  ordersStore.deleteOrder(currentOrderId.value);
  switchModalRemove(false);
};

const isModalRemove = ref(false);

const deleteAction = (id: string) => {
  console.log("qwdqwd");

  switchOrderId(id);
  switchModalRemove(true);
};

const switchModalRemove = (value: boolean) => {
  isModalRemove.value = value;
};

const isOrderDetails = ref(false);

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
      <UiModalWarning
        v-if="currentOrderId"
        v-model="isModalRemove"
        @closeModal="switchModalRemove(false)"
        @confirm="deleteOrder"
        >Ви впевнені, що хочете видалити завдання?</UiModalWarning
      >

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

      <CommonTable :pageTable="page" :endPage="endPage" @setPage="setPage">
        <template #headers>
          <UiTableCellHeader>
            <CommonButtonSortingTable
              :sortingUp="sorting === 'date' && reverseSorting"
              :sortingDown="sorting === 'date' && !reverseSorting"
              @click="setSorting('date')"
              class="!font-normal"
            >
              Дата замовлення</CommonButtonSortingTable
            ></UiTableCellHeader
          >
          <UiTableCellHeader>Клієнт</UiTableCellHeader>
          <UiTableCellHeader>
            <CommonButtonSortingTable
              :sortingUp="sorting === 'total_sum' && reverseSorting"
              :sortingDown="sorting === 'total_sum' && !reverseSorting"
              @click="setSorting('total_sum')"
              class="!font-normal"
            >
              Сума замовлення</CommonButtonSortingTable
            >
          </UiTableCellHeader>
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
            @deleteAction="deleteAction"
          />
        </template>
      </CommonTable>
    </template>
  </LayoutProfilePage>
</template>

<style scoped></style>
