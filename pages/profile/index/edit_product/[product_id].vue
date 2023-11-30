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

const handlerChangeInputs = (value: any, type: keyof GlobalProduct) => {
  inputs.value[type] = value;
};
</script>

<template>
  <LayoutProfilePage title="Редагувати товар">
    <template #header>
      <UiButtonOpacityBorder @click="" class="hidden lg:block">
        Редагувати
      </UiButtonOpacityBorder>
    </template>
    <template #content>
      <LayoutProduct
        :inputs="inputs"
        :error="error"
        :messageToUser="messageToUser"
        @updateInputs="handlerChangeInputs"
      >
      </LayoutProduct>
      <div class="flex justify-center">
        <UiButtonOpacityBorder @click="" class="lg:hidden mt-[25px]">
          Редагувати
        </UiButtonOpacityBorder>
      </div>
    </template>
  </LayoutProfilePage>
</template>

<style scoped></style>
