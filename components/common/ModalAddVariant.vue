<script setup lang="ts">
const props = defineProps<{
  type: VariantType;
}>();

const emits = defineEmits(["actionSuccess"]);
const actionSuccess = () => {
  emits("actionSuccess");
};

const status = ref("");


const onCreateNewStatus = () => {
  useNewVariant(status.value, props.type).then(() => {
    actionSuccess();
  });
};
</script>

<template>
  <UiModalTitle title="Додати статус" :ui="{ width: '!max-w-[414px]' }">
    <UiLabelProfile class="mt-[15px] md:mt-[20px]" label="Введіть статус:">
      <UiInputProfile v-model="status"></UiInputProfile>
    </UiLabelProfile>

    <UiButtonOpacityBorder
      :disabled="status"
      @click="onCreateNewStatus"
      class="self-center mt-[25px]"
      >Зберегти</UiButtonOpacityBorder
    >
  </UiModalTitle>
</template>

<style scoped></style>
