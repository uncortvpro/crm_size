<script setup lang="ts">
const inputs = ref<Cashier>({
  name: "",
  type: "",
} as Cashier);

const emits = defineEmits(["successAction"]);

const successAction = () => {
  emits("successAction");
};

const onCreateCashier = () => {
  useAuthFetch(`${useApiUrl()}/add_cashier`, {
    body: {
      name: inputs.value.name,
      type: inputs.value.type,
    },
  }).then((res) => {
    if (res.message) {
      successAction();
    }
  });
};
</script>

<template>
  <UiModalTitle :ui="{ width: '!max-w-[414px]' }" title="Додати касу">
    <form action="#" @submit.prevent="onCreateCashier">
      <div class="flex flex-col pt-[15px] xl:pt-[20px]">
        <UiLabelProfile label="Введіть назву:">
          <UiInputProfile required v-model="inputs.name"></UiInputProfile>
        </UiLabelProfile>

        <UiLabelProfile
          class="pt-[15px] xl:pt-[20px]"
          label="Оберіть категорію:"
        >
          <div class="flex items-center gap-[20px] pt-[10px]">
            <UiRadio
              v-model="inputs.type"
              value="Готівкова"
              label="Готівкова"
            ></UiRadio>
            <UiRadio
              v-model="inputs.type"
              value="Безготівкова"
              label="Безготівкова"
            ></UiRadio>
          </div>
        </UiLabelProfile>

        <UiButtonOpacityBorder
          type="submit"
          class="mt-[20px] xl:mt-[30px] self-center w-fit"
          >Зберегти</UiButtonOpacityBorder
        >
      </div>
    </form>
  </UiModalTitle>
</template>

<style scoped></style>
