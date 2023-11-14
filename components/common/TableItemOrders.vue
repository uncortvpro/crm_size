<script setup lang="ts">
const props = defineProps<{
  order: Order;
}>();

const emits = defineEmits(["deleteAction", "showDetails"]);


const showDetails = () => {
  emits("showDetails", props.order._id);
};


const router = useRouter();
</script>

<template>
  <UiTableItem>
    <template #header>
      <span class="max-w-[200px] w-full inline-block truncate"
        >{{ useDate(order?.date) }}
      </span>
    </template>
    <template #elements="{ active }">
      <!-- <UiTransitionTableCell :vIf="active">
        <template #title>№</template>
        <template #value>№</template>
      </UiTransitionTableCell> -->
      <UiTransitionTableCell :vIf="active">
        <template #title>Дата</template>
        <template #value>
          <span
            class="font-medium leading-[130%] max-w-[200px] inline-block truncate"
            >{{ useDate(order?.date) }}</span
          ></template
        >
      </UiTransitionTableCell>

      <UiTransitionTableCell :vIf="active">
        <template #title>Клієнт</template>
        <template #value>{{ order?.client }}</template>
      </UiTransitionTableCell>

      <UiTransitionTableCell :vIf="active">
        <template #title>Сума замовлення</template>
        <template #value>{{ order?.total_sum }}<CommonCurrencyText /></template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Джерело замовлення</template>
        <template #value>{{ order?.source }}</template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Статус</template>
        <template #value>
          <CommonStatusOutput :color="order.status.colour">{{
            order.status.status
          }}</CommonStatusOutput>
        </template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Оплата</template>
        <template #value>{{ order?.payment }}</template>
      </UiTransitionTableCell>
    </template>
    <template #additional-buttons>
      <div class="flex items-center gap-[5px] md:gap-[25px]">
        <UiButtonOpacityThreeDots
          @click.stop="showDetails"
        ></UiButtonOpacityThreeDots>
        <UiButtonOpacityEdit
          class="flex-shrink-0"
          @click.stop="navigateTo('/profile/edit_order/' + order._id)"
        />
        <UiButtonOpacityDelete class="flex-shrink-0" @click.stop="" />
      </div>
    </template>
  </UiTableItem>
</template>

<style scoped></style>
