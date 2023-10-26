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
        <div class="grid grid-cols-9">
          <UiTableHeader>Ім’я</UiTableHeader>
          <UiTableHeader>Номер телефону</UiTableHeader>
          <UiTableHeader>Email</UiTableHeader>
          <UiTableHeader>Instagram</UiTableHeader>
          <UiTableHeader>Історія покупок</UiTableHeader>
          <UiTableHeader>Тотал сума покупок</UiTableHeader>
          <UiTableHeader>Дата останньої покупки</UiTableHeader>
          <UiTableHeader>Статус</UiTableHeader>
        </div>
        <div class="grid grid-cols-9">
          <UiTableHeader>Ім’я</UiTableHeader>
          <UiTableHeader>Номер телефону</UiTableHeader>
          <UiTableHeader>Email</UiTableHeader>
          <UiTableHeader>Instagram</UiTableHeader>
          <UiTableHeader>Історія покупок</UiTableHeader>
          <UiTableHeader>Тотал сума покупок</UiTableHeader>
          <UiTableHeader>Дата останньої покупки</UiTableHeader>
          <UiTableHeader>Статус</UiTableHeader>
        </div>
      </div>
    </div>
  </LayoutProfilePage>
</template>

<style scoped></style>
