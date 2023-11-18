<script setup lang="ts">
const props = defineProps<{
  product: any;
}>();

const emits = defineEmits(["deleteAction"]);

const deleteAction = () => {
  emits("deleteAction", props.product._id);
};
</script>

<template>
  <UiTableItem
    :isMobileClose="false"
    class="grid-cols-order-details-modal-xs gap-x-[10px] md:grid-cols-order-details-modal-md relative"
  >
    <template #elements>
      <UiTableCellPadding class="!grid-cols-1 !col-span-1 row-span-5">
        <img
          class="max-w-[40px]"
          v-if="product.photos[0]"
          :src="useBase64(product.photos[0]) || ''"
          alt=""
        />
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
        <template #value>{{ product?.in_stock }}</template>
      </UiTableCell>
      <UiTableCell class="col-span-2">
        <template #title>Ціна</template>
        <template #value>{{ product?.price }}<CommonCurrencyText /></template>
      </UiTableCell>
      <UiTableCell class="col-span-2">
        <template #title>Ціна</template>
        <template #value>
          <UiButtonOpacityDelete
            class="flex-shrink-0 absolute right-0 top-0 3xl:relative"
            @click.stop="deleteAction"
        /></template>
      </UiTableCell>
    </template>
  </UiTableItem>
</template>

<style scoped></style>
