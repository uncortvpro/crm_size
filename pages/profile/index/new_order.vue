<script setup lang="ts">
const error = ref("");
const messageToUser = ref("");

const inputs = ref<any>({
  // participants: [],
  // headline: "",
  // description: "",
  // responsible: "",
  // deadline: "",
  // status: "",
  // comment: "",
});

const handlerChangeInputs = (value: any, type: keyof Objective) => {
  inputs.value[type] = value;
};

watch(
  inputs,
  () => {
    console.log(inputs.value);
  },
  { deep: true }
);
</script>

<template>
  <LayoutProfilePage title="Додати замовлення">
    <template #header>
      <UiButtonOpacityBorder @click="" class="hidden lg:block">
        Створити
      </UiButtonOpacityBorder>
    </template>
    <template #content>
      <LayoutOrder
        :inputs="inputs"
        :error="error"
        :messageToUser="messageToUser"
        @updateInputs="handlerChangeInputs"
      ></LayoutOrder>
      <div class="flex justify-center">
        <UiButtonOpacityBorder @click="" class="lg:hidden mt-[25px]">
          Створити
        </UiButtonOpacityBorder>
      </div>
    </template>
  </LayoutProfilePage>
</template>

<style scoped></style>
