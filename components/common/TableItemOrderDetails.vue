<script setup lang="ts">
defineProps<{
  product: Product;
}>();
</script>

<template>
  <UiTableItem
    :isMobileClose="false"
    class="grid-cols-order-details-modal-xs gap-x-[10px] md:grid-cols-order-details-modal-md"
  >
    <template #elements>
      <UiTableCellPadding class="!grid-cols-1 !col-span-1 row-span-5">
        <img class="max-w-[40px]" :src="useBase64(product.picture) || ''" alt="" />
      </UiTableCellPadding>
      <UiTableCell class="col-span-2">
        <template #title>Найменування</template>
        <template #value>{{ product?.name }}</template>
      </UiTableCell>
      <!-- <UiTableCell class="col-span-2">
        <template #title>Артикул</template>
        <template #value> {{ 'product.variant_id' }} </template>
      </UiTableCell> -->
      <UiTableCell class="col-span-2">
        <template #title>Розмір</template>
        <template #value>{{ product?.size }}</template>
      </UiTableCell>
      <UiTableCell class="col-span-2">
        <template #title>Кількість</template>
        <template #value>{{ product?.amount }}</template>
      </UiTableCell>
      <UiTableCell class="col-span-2">
        <template #title>Ціна</template>
        <template #value>{{ product?.price }}<CommonCurrencyText /></template>
      </UiTableCell>
    </template>
  </UiTableItem>
</template>

<style scoped></style>
