<script setup lang="ts">
const props = defineProps<{
  products: VariationProduct[];
  isOpen?: boolean;
  ui?: any;
  label: string;
}>();

const fullCost = computed(() =>
  props.products.reduce((acc, el) => (acc = acc + +el.price * el.amount), 0)
);
</script>
<template>
  <UiModalTitleClose :ui="{ width: '!max-w-[923px]' }" :label="label">
    <CommonTable :pagination="false" class="!mt-[20px]">
      <template #headers>
        <UiTableCellHeader></UiTableCellHeader>
        <UiTableCellHeader>Найменування</UiTableCellHeader>
        <!-- <UiTableCellHeader>Артикул</UiTableCellHeader> -->
        <UiTableCellHeader>Розмір</UiTableCellHeader>
        <UiTableCellHeader>Кількість</UiTableCellHeader>
        <UiTableCellHeader>Ціна</UiTableCellHeader>
      </template>
      <template #items>
        <CommonTableItemOrderDetails
          v-for="(product, index) in products"
          :key="index"
          :product="product"
        ></CommonTableItemOrderDetails>
      </template>
    </CommonTable>
    <p class="font-medium text-[15px] mt-[20px]">
      Всього: {{ fullCost }} <CommonCurrencyText />
    </p>
  </UiModalTitleClose>
</template>

<style scoped></style>
