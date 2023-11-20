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

      <div class="overflow-auto max-w-full w-full no_scroll_bar">
        <div
          class="mb-[25px] xl:mb-[31px] flex items-center gap-[10px] md:gap-[20px] xl:gap-[30px]"
        >
          <div
            class="bg-beige rounded-[10px] border-[2px] border-beige-1 p-[15px] pr-[40px] xl:pr-[52px] lg:px-[20px] text-black w-fit"
          >
            <p
              class="text-[11px] text-black font-medium md:text-[12px] xl:text-[15px]"
            >
              Всі каси
            </p>
            <p class="text-[7px] md:text-[10px] mt-[5px] opacity-0">Г</p>
            <p
              class="text-[22px] mt-[8px] xl:nt-[10px] md:text-[27px] xl:text-[30px] font-semibold"
            >
              45200₴
            </p>
            <div class="mt-[12px] xl:mt-[15px] grid grid-cols-2 gap-y-[5px]">
              <p class="text-[7px] md:text-[10px]">Доходи</p>
              <p class="text-[7px] md:text-[10px]">Витрати</p>
              <p class="text-[7px] md:text-[10px]">75400₴</p>
              <p class="text-[7px] md:text-[10px]">-15000₴</p>
            </div>
          </div>
          <div
            class="bg-beige rounded-[10px] p-[15px] pr-[40px] opacity-30 xl:pr-[52px] lg:px-[20px] text-black w-fit"
          >
            <p
              class="text-[11px] text-black font-medium md:text-[12px] xl:text-[15px]"
            >
              Каса 1
            </p>
            <p class="text-[7px] md:text-[10px] mt-[5px]">Готівкова</p>
            <p
              class="text-[22px] mt-[8px] xl:nt-[10px] md:text-[27px] xl:text-[30px] font-semibold"
            >
              45200₴
            </p>
            <div class="mt-[12px] xl:mt-[15px] grid grid-cols-2 gap-y-[5px]">
              <p class="text-[7px] md:text-[10px]">Доходи</p>
              <p class="text-[7px] md:text-[10px]">Витрати</p>
              <p class="text-[7px] md:text-[10px]">+50500₴</p>
              <p class="text-[7px] md:text-[10px]">-24900₴</p>
            </div>
          </div>
          <div
            class="bg-beige rounded-[10px] p-[15px] pr-[40px] opacity-30 xl:pr-[52px] lg:px-[20px] text-black w-fit"
          >
            <p
              class="text-[11px] text-black font-medium md:text-[12px] xl:text-[15px]"
            >
              Каса 2
            </p>
            <p class="text-[7px] md:text-[10px] mt-[5px]">Готівкова</p>
            <p
              class="text-[22px] mt-[8px] xl:nt-[10px] md:text-[27px] xl:text-[30px] font-semibold"
            >
              30200₴
            </p>
            <div class="mt-[12px] xl:mt-[15px] grid grid-cols-2 gap-y-[5px]">
              <p class="text-[7px] md:text-[10px]">Доходи</p>
              <p class="text-[7px] md:text-[10px]">Витрати</p>
              <p class="text-[7px] md:text-[10px]">+50500₴</p>
              <p class="text-[7px] md:text-[10px]">-24900₴</p>
            </div>
          </div>
          <button
            class="bg-beige rounded-[10px] px-[42px] xl:px-[59px] flex flex-col items-center justify-center gap-[5px] p-[15px] self-stretch pr-[40px] opacity-30 xl:pr-[52px] lg:px-[20px] text-black w-fit"
          >
            <SvgoCross class="!w-[21px] !h-[21px] xl:!w-[31px] xl:!h-[31px] stroke-beige-2"></SvgoCross>
            <p class="text-[11px] text-black font-medium md:text-[12px] xl:text-[15px]">Додати касу</p>
          </button>
        </div>
      </div>

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
