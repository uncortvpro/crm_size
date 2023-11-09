<script setup lang="ts">
const props = defineProps<{
  order: ShoppingHistoryItem;
}>();

const emits = defineEmits(["showOrderDetails"]);

const showOrderDetails = () => {
  emits("showOrderDetails", props.order._id);
};
</script>

<template>
  <UiTableItem :isMobileClose="true">
    <template #header> {{ useDate(order?.date) }} </template>
    <template #elements="{ active }">
      <UiTransitionTableCell :vIf="active">
        <template #title>Дата покупки</template>
        <template #value>{{ useDate(order?.date) }}</template>
      </UiTransitionTableCell>
      <!-- <UiTransitionTableCell :vIf="active">
        <template #title>Номер замовлення</template>
        <template #value>{{ "Номер замовлення" }}</template>
      </UiTransitionTableCell> -->
      <UiTransitionTableCell :vIf="active">
        <template #title>Сума замовлення</template>
        <template #value>{{ order?.total_sum }}<CommonCurrencyText /></template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Товари</template>
        <template #value>{{ order?.products.length }}</template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Оплата</template>
        <template #value>{{ order?.payment }}</template>
      </UiTransitionTableCell>
      <UiTransitionTableCell
        v-if="order.status"
        :vIf="active"
        class="3xl:w-[12%]"
      >
        <template #title>Статус замовлення</template>
        <template #value>
          <CommonStatusOutput :color="order.status.colour">{{
            order?.status.status
          }}</CommonStatusOutput>
        </template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active" class="3xl:hidden col-span-2">
        <template #title>
          <UiButtonTextArrowRight @click="showOrderDetails"
            >Детальніше</UiButtonTextArrowRight
          >
        </template>
      </UiTransitionTableCell>
    </template>
    <template #additional-buttons>
      <UiButtonOpacityThreeDots
        @click="showOrderDetails"
        class="hidden 3xl:block"
      ></UiButtonOpacityThreeDots>
    </template>
  </UiTableItem>
</template>

<style scoped></style>
