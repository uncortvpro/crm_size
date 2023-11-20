<script setup lang="ts">
const props = defineProps<{
  variation: any;
}>();

const emits = defineEmits(["showOrderDetails"]);

const showOrderDetails = () => {
  emits("showOrderDetails", props.variation._id);
};
</script>

<template>
  <UiTableItem :isMobileClose="true">
    <template #header> S </template>
    <template #elements="{ active }">
      <UiTransitionTableCell class="2xl:w-[25%]" :vIf="active">
        <template #title>Розмір</template>
        <template #value>S</template>
      </UiTransitionTableCell>
      <UiTransitionTableCell class="2xl:w-[25%]"  :vIf="active">
        <template #title>Колір</template>
        <template #value>Білий<CommonCurrencyText /></template>
      </UiTransitionTableCell>
      <UiTransitionTableCell class="2xl:w-[25%]"  :vIf="active">
        <template #title>Ціна</template>
        <template #value>1370₴</template>
      </UiTransitionTableCell>
      <UiTransitionTableCell class="2xl:w-[25%]"  :vIf="active">
        <template #title>Кількість на складі</template>
        <template #value>12</template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active" class="3xl:hidden col-span-2">
        <template #title>
          <UiButtonTextArrowRight @click="showOrderDetails"
            >Детальніше</UiButtonTextArrowRight
          >
        </template>
      </UiTransitionTableCell>
    </template>
  </UiTableItem>
</template>

<style scoped></style>
