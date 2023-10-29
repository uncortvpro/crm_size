<script setup lang="ts">
const isOpen = ref(false);
const switchOpen = (value: boolean) => {
  isOpen.value = value;
};
</script>

<template>
  <LayoutProfilePage title="Редагувати клієнта">
    <template #header>
      <div class="items-center gap-[40px] hidden lg:flex">
        <UiButtonOpacityBorder disabled> Оновити </UiButtonOpacityBorder>
        <UiButtonIcon
          @click="isOpen = !isOpen"
          :value="'Видалити'"
          class="w-fit"
        >
          <SvgoDelete class="-order-10"></SvgoDelete>
        </UiButtonIcon>
      </div>
    </template>
    <template #content>
      <LayoutClient :labelStatus="'Змінити статус клієнта:'"> </LayoutClient>
      <CommonModalOrderDetails
        v-model="isOpen"
        label="Деталі замовлення"
        @closeModal="switchOpen"
      ></CommonModalOrderDetails>
      <div class="mt-[25px] xl:mt-[40px]">
        <UiHeader2>Історія покупок</UiHeader2>
        <CommonTable>
          <template #headers>
            <UiTableCellHeader>Дата покупки</UiTableCellHeader>
            <UiTableCellHeader>Номер замовлення</UiTableCellHeader>
            <UiTableCellHeader>Сума замовлення</UiTableCellHeader>
            <UiTableCellHeader>Товари</UiTableCellHeader>
            <UiTableCellHeader>Оплата</UiTableCellHeader>
            <UiTableCellHeader>Статус замовлення</UiTableCellHeader>
          </template>
          <template #items>
            <CommonTableItemShoppingHistory></CommonTableItemShoppingHistory>
            <CommonTableItemShoppingHistory></CommonTableItemShoppingHistory>
            <CommonTableItemShoppingHistory></CommonTableItemShoppingHistory>
            <CommonTableItemShoppingHistory></CommonTableItemShoppingHistory>
            <CommonTableItemShoppingHistory></CommonTableItemShoppingHistory>
            <CommonTableItemShoppingHistory></CommonTableItemShoppingHistory>
          </template>
        </CommonTable>
      </div>
      <div class="flex flex-col items-center lg:hidden mt-[25px]">
        <UiButtonOpacityBorder disabled> Оновити </UiButtonOpacityBorder>
        <UiButtonIcon :value="'Видалити'" class="w-fit mt-[17px]">
          <SvgoDelete class="-order-10"></SvgoDelete>
        </UiButtonIcon>
      </div>
    </template>
  </LayoutProfilePage>
</template>

<style scoped></style>
