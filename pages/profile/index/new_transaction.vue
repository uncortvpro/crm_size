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
  recuring: false,
  periodicity: 7,
});

const handlerChangeInputs = (value: any, type: keyof InputsTransaction) => {
  inputs.value[type] = value;
};

const validateResponse = (message: any) => {
  if (message === true) {
    navigateTo("/profile/finance");
    return false;
  } else {
    error.value = "Щось не вийшло!";
  }
};

const onCreateTransaction = () => {
  useAuthFetch(`${useApiUrl()}/add_transaction`, {
    body: {
      type: inputs.value.type,
      cashier: inputs.value.cashier,
      sum: +inputs.value.sum,
      counterpartie: inputs.value.counterpartie,
      date: useFormatDate(inputs.value.date),
      category: inputs.value.category,
      comment: inputs.value.comment,

      recuring: inputs.value.recuring,
      periodicity: +inputs.value?.periodicity || false,
    },
  })
    .then((res) => {
      validateResponse(res.message);
    })
    .catch((res) => {
      validateResponse(false);
    });
};
</script>

<template>
  <LayoutProfilePage isButtonBack title="Додати транзакцію">
    <template #header>
      <UiButtonOpacityBorder
        @click="onCreateTransaction"
        class="hidden lg:block"
      >
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
      <div class="flex justify-center">
        <UiButtonOpacityBorder
          @click="onCreateTransaction"
          class="lg:hidden mt-[25px]"
        >
          Створити
        </UiButtonOpacityBorder>
      </div>
    </template>
  </LayoutProfilePage>
</template>

<style scoped></style>
