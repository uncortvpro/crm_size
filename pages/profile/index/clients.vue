<script setup lang="ts"></script>

<template>
  <LayoutProfilePage title="Клієнти">
    <div class="mt-[15px] xl:mt-[25px]">
      <div class="flex justify-between gap-[15px] items-center">
        <UiButtonOpacityBorderAddItem class="flex-shrink-0"
          >Додати клієнта</UiButtonOpacityBorderAddItem
        >
        <CommonSearchBorder />
      </div>
      <div
        class="p-[20px] 2xl:p-[30px] mt-[29px] 2xl:mt-[35px] rounded-[10px] 2xl:rounded-[20px] bg-beige"
      >
        <table class="table-auto w-full">
          <thead>
            <tr class="hidden 3xl:table-row border-b border-beige-1">
              <UiTableCellHeader>Ім’я</UiTableCellHeader>
              <UiTableCellHeader>Номер телефону</UiTableCellHeader>
              <UiTableCellHeader>Email</UiTableCellHeader>
              <UiTableCellHeader>Instagram</UiTableCellHeader>
              <UiTableCellHeader>Історія покупок </UiTableCellHeader>
              <UiTableCellHeader>Тотал сума покупок</UiTableCellHeader>
              <UiTableCellHeader>Дата останньої покупки</UiTableCellHeader>
              <UiTableCellHeader>Статус</UiTableCellHeader>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <CommonTableItem></CommonTableItem>
          </tbody>
        </table>
      </div>
    </div>
  </LayoutProfilePage>
</template>

<style scoped></style>
