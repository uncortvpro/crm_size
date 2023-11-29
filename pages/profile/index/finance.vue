<script setup lang="ts">
const test = useTestStore();
const financeStore = useFinanceStore();

const transactions = computed(() => financeStore.transactions);

const fetchTransactions = () => {
  financeStore.fetchTransactions();
};

const searchTransactions = (keyword: string) =>
  financeStore.searchTransactions(keyword);

const currentTransactionId = ref("");
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
        >Ви впевнені, що хочете видалити транзакцію?</UiModalWarning
      >

      <PagesCashierList></PagesCashierList>

      <CommonNavigationPage
        @search="searchTransactions"
        @add="navigateTo('new_transaction')"
      >
        <template #add_name> Додати транзакцію</template>
      </CommonNavigationPage>

      <CommonTable>
        <template #headers>
          <UiTableCellHeader> Дата </UiTableCellHeader>
          <UiTableCellHeader>Сума</UiTableCellHeader>
          <UiTableCellHeader> Контрагент </UiTableCellHeader>
          <UiTableCellHeader>Залишок у касі</UiTableCellHeader>
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
