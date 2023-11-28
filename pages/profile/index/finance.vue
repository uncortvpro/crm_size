<script setup lang="ts">
const test = useTestStore();

const financeList = computed(() => test.finance);
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

      <CommonNavigationPage @search="" @add="navigateTo('new_transaction')">
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
            v-for="transaction in financeList"
            :key="transaction.id"
            :transaction="transaction"
            @deleteAction="deleteAction(transaction.id)"
          />
        </template>
      </CommonTable>
    </template>
  </LayoutProfilePage>
</template>

<style scoped></style>
