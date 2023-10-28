<script setup lang="ts">
defineProps<{
  isOpen?: boolean;
  ui?: any;
  label: string;
}>();
</script>
<template>
  <UiModalTitleClose :ui="{ width: '!max-w-[923px]' }" :label="label">
    <CommonTable :pagination="false" class="!mt-[20px]">
      <template #headers>
        <UiTableCellHeader></UiTableCellHeader>
        <UiTableCellHeader>Найменування</UiTableCellHeader>
        <UiTableCellHeader>Артикул</UiTableCellHeader>
        <UiTableCellHeader>Розмір</UiTableCellHeader>
        <UiTableCellHeader>Кількість</UiTableCellHeader>
        <UiTableCellHeader>Ціна</UiTableCellHeader>
      </template>
      <template #items>
        <CommonTableItemOrderDetails></CommonTableItemOrderDetails>
        <CommonTableItemOrderDetails></CommonTableItemOrderDetails>
      </template>
    </CommonTable>
  </UiModalTitleClose>
</template>

<style scoped></style>
