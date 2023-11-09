<script setup lang="ts">
const props = defineProps<{
  emailClient: string;
  shoppingHistoryItems: ShoppingHistoryItem[];
  page: number;
  endPage: number;
  sorting: SortingShoppingHistory;
  reverseSorting: boolean;
}>();

const emits = defineEmits(["setPage", "setSorting"]);

const setPage = (page: number) => {
  emits("setPage", page);
};

const setSorting = (sorting: SortingShoppingHistory) => {
  emits("setSorting", sorting);
};

const currentOrderId = ref("");
const isOrderDetails = ref(false);

const switchOrderDetails = (value: boolean) => {
  isOrderDetails.value = value;
};

const showOrderDetails = (id: string) => {
  currentOrderId.value = id;
  switchOrderDetails(true);
};

const currentOrder = computed(() => {
  if (props.shoppingHistoryItems) {
    return props.shoppingHistoryItems.find(
      (item: ShoppingHistoryItem) => item._id === currentOrderId.value
    );
  }
  return false;
});
</script>

<template>
  <div>
    <UiHeader2>Історія покупок</UiHeader2>
    <CommonModalOrderDetails
      v-if="currentOrder"
      :products="currentOrder.products"
      v-model="isOrderDetails"
      label="Деталі замовлення"
      @closeModal="switchOrderDetails"
    ></CommonModalOrderDetails>
    <CommonTable :pageTable="page" :endPage="endPage" @setPage="setPage">
      <template #headers>
        <UiTableCellHeader>
          <CommonButtonSortingTable
            :sortingUp="sorting === 'order_date' && reverseSorting"
            :sortingDown="sorting === 'order_date' && !reverseSorting"
            @click="setSorting('order_date')"
            class="!font-normal"
          >
            Дата покупки</CommonButtonSortingTable
          >
        </UiTableCellHeader>
        <!-- <UiTableCellHeader>Номер замовлення</UiTableCellHeader> -->
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
        <UiTableCellHeader>Товари</UiTableCellHeader>
        <UiTableCellHeader>Оплата</UiTableCellHeader>
        <UiTableCellHeader>Статус замовлення</UiTableCellHeader>
      </template>
      <template #items>
        <CommonTableItemShoppingHistory
          v-for="order in shoppingHistoryItems"
          :key="order._id"
          :order="order"
          @showOrderDetails="showOrderDetails"
        ></CommonTableItemShoppingHistory>
      </template>
    </CommonTable>
  </div>
</template>

<style scoped></style>
