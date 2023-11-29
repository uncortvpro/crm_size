<script setup lang="ts">
const error = ref("");
const messageToUser = ref("");

const inputs = ref<InputsTransaction>({
  cashier: "",
  counterpartie: "",
  sum: "",
  date: "",
  category: "",
  comment: "",
  type: "На рахунок",
});

const handlerChangeInputs = (value: any, type: keyof InputsTransaction) => {
  inputs.value[type] = value;
};
</script>

<template>
  <LayoutProfilePage title="Редагувати транзакцію">
    <template #header>
      <UiButtonOpacityBorder @click="" class="hidden lg:block">
        Редагувати
      </UiButtonOpacityBorder>
    </template>
    <template #content>
      <LayoutTransaction
        :inputs="inputs"
        :error="error"
        :messageToUser="messageToUser"
        @updateInputs="handlerChangeInputs"
      ></LayoutTransaction>
      <div class="flex justify-center">
        <UiButtonOpacityBorder @click="" class="lg:hidden mt-[25px]">
          Редагувати
        </UiButtonOpacityBorder>
      </div>
    </template>
  </LayoutProfilePage>
</template>

<style scoped></style>
