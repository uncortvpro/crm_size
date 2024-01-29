<script setup lang="ts">
definePageMeta({
  middleware: ["is-all-role"],
});

const financeStore = useFinanceStore();

const transactions = computed(() => financeStore.transactions);

const page = computed(() => financeStore.page);
const endPage = computed(() => financeStore.endPage);
const setPage = (page: number) => financeStore.setPage(page);

const sorting = computed(() => financeStore.sorting);
const reverseSorting = computed(() => financeStore.reverseSorting);
const setSorting = (sorting: SortingTransaction) => {
  financeStore.setSorting(sorting);
};

const fetchTransactions = () => {
  financeStore.fetchTransactions();
};
const currentTransactionId = ref("");
const deleteTransactions = async () => {
  financeStore.deleteTransactions(currentTransactionId.value);
  switchModalRemove(false);
};

const searchTransactions = (keyword: string) =>
  financeStore.searchTransactions(keyword);

const isModalRemove = ref(false);

const deleteAction = (id: string) => {
  switchTransactionId(id);
  switchModalRemove(true);
};

const switchModalRemove = (value: boolean) => {
  isModalRemove.value = value;
};

const switchTransactionId = (id: string) => {
  currentTransactionId.value = id;
};

fetchTransactions();
</script>

<template>
  <LayoutProfilePage title="Фінанси">
    <template #content>
      <UiModalWarning
        v-if="currentTransactionId"
        v-model="isModalRemove"
        @closeModal="switchModalRemove(false)"
        @confirm="deleteTransactions"
        >Ви впевнені, що хочете видалити транзакцію?</UiModalWarning
      >

      <PagesCashierList></PagesCashierList>

      <CommonNavigationPage
        @search="searchTransactions"
        @add="navigateTo('new_transaction')"
      >
        <template #add_name> Додати транзакцію</template>
      </CommonNavigationPage>

      <CommonTable :pageTable="page" :endPage="endPage" @setPage="setPage">
        <template #headers>
          <UiTableCellHeader>
            <CommonButtonSortingTable
              :sortingUp="sorting === 'date' && reverseSorting"
              :sortingDown="sorting === 'date' && !reverseSorting"
              @click="setSorting('date')"
              class="!font-normal"
            >
              Дата</CommonButtonSortingTable
            >
          </UiTableCellHeader>
          <UiTableCellHeader>
            <CommonButtonSortingTable
              :sortingUp="sorting === 'sum' && reverseSorting"
              :sortingDown="sorting === 'sum' && !reverseSorting"
              @click="setSorting('sum')"
              class="!font-normal"
            >
              Сума</CommonButtonSortingTable
            >
          </UiTableCellHeader>
          <UiTableCellHeader> Контрагент </UiTableCellHeader>
          <UiTableCellHeader>
            <CommonButtonSortingTable
              :sortingUp="sorting === 'total_left' && reverseSorting"
              :sortingDown="sorting === 'total_left' && !reverseSorting"
              @click="setSorting('total_left')"
              class="!font-normal"
            >
              Залишок у касі</CommonButtonSortingTable
            >
          </UiTableCellHeader>
          <UiTableCellHeader>Каса</UiTableCellHeader>
          <UiTableCellHeader>Коментар</UiTableCellHeader>
        </template>
        <template #items>
          <CommonTableItemTransaction
            v-for="transaction in transactions"
            :key="transaction._id"
            :transaction="transaction"
            @deleteAction="deleteAction(transaction._id)"
          />
        </template>
      </CommonTable>
    </template>
  </LayoutProfilePage>
</template>

<style scoped></style>
