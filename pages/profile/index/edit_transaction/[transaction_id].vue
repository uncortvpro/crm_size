<script setup lang="ts">
const error = ref("");
const messageToUser = ref("");

const inputs = ref<any>({
  client: "",
  email: "",
  comment: "",
  payment: "",
  shipping: "",
  source: "",
  status: "",
  products: [],
});

const handlerChangeInputs = (value: any, type: any) => {
  inputs.value[type] = value;
};
</script>

<template>
  <LayoutProfilePage title="Редагувати транзакцію">
    <template #header>
      <UiButtonOpacityBorder @click="" class="hidden lg:block">
        Створити
      </UiButtonOpacityBorder>
    </template>
    <template #content>
      <LayoutTransaction
        :inputs="inputs"
        :error="error"
        :messageToUser="messageToUser"
        @updateInputs="handlerChangeInputs"
      ></LayoutTransaction>
    </template>
  </LayoutProfilePage>
</template>

<style scoped></style>
