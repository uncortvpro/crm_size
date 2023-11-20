<script setup lang="ts">
const emits = defineEmits(["actionSuccess"]);
const actionSuccess = () => {
  emits("actionSuccess");
};

const subwarehouse = ref("");
const warehouse = ref("");

const onCreateNewSubwarehouse = () => {
  useAuthFetch(`${useApiUrl()}/add_subwarehouse`, {
    body: {
      warehouse: warehouse.value,
      subwarehouse: subwarehouse.value,
    },
  }).then((res) => {
    if (res.message) {
      actionSuccess();
    }
  });
};
</script>

<template>
  <UiModalTitle title="Додати підсклад" :ui="{ width: '!max-w-[414px]' }">
    <UiLabelProfile
      class="mt-[15px] md:mt-[20px] col-span-2 md:col-span-1"
      label="Склад:"
    >
      <CommonSelectWarehouse
        v-model="warehouse"
        :valueSelect="warehouse"
      ></CommonSelectWarehouse>
    </UiLabelProfile>
    <UiLabelProfile class="mt-[15px] md:mt-[20px]" label="Введіть підсклад:">
      <UiInputProfile v-model="subwarehouse"></UiInputProfile>
    </UiLabelProfile>

    <UiButtonOpacityBorder
      :disabled="!subwarehouse || !warehouse"
      @click="onCreateNewSubwarehouse"
      class="self-center mt-[25px]"
      >Зберегти</UiButtonOpacityBorder
    >
  </UiModalTitle>
</template>

<style scoped></style>
