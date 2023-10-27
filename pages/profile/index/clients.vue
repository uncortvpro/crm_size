<script setup lang="ts">
</script>

<template>
  <LayoutProfilePage title="Клієнти">
    <div class="mt-[15px] xl:mt-[25px]">
      <div class="flex justify-between gap-[15px] items-center">
        <UiButtonOpacityBorderAddItem class="flex-shrink-0"
          >Додати клієнта</UiButtonOpacityBorderAddItem
        >
        <CommonSearchBorder />
      </div>
        <CommonTable>
          <template #headers>
            <UiTableCellHeader>Ім’я</UiTableCellHeader>
            <UiTableCellHeader>Номер телефону</UiTableCellHeader>
            <UiTableCellHeader>Email</UiTableCellHeader>
            <UiTableCellHeader>Instagram</UiTableCellHeader>
            <UiTableCellHeader>Історія покупок </UiTableCellHeader>
            <UiTableCellHeader>Тотал сума покупок</UiTableCellHeader>
            <UiTableCellHeader>
              <UiButtonTextArrowTop class="!font-normal">Дата останньої покупки</UiButtonTextArrowTop>
            </UiTableCellHeader>
            <UiTableCellHeader>Статус</UiTableCellHeader>
          </template>
          <template #items>
            <CommonTableItemClients></CommonTableItemClients>
          </template>
        </CommonTable>
    </div>
  </LayoutProfilePage>
</template>

<style scoped></style>
