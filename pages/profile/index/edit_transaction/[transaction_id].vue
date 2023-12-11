<script setup lang="ts">
const error = ref("");
const messageToUser = ref("");

const route = useRoute();
const transactionId: any = route.params.transaction_id;
// const financeStore = useFinanceStore();

// const transaction = computed(
//   () => financeStore.getTransactionById(transactionId) as Transaction
// );

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

// onBeforeMount(() => {
//   inputs.value.cashier = transaction.value?.cashier;
//   inputs.value.counterpartie = transaction.value?.counterpartie;
//   inputs.value.sum = String(transaction.value?.sum);
//   inputs.value.date = transaction.value?.date;
//   inputs.value.category = transaction.value?.category;
//   inputs.value.comment = transaction.value?.comment;
//   inputs.value.type = transaction.value?.type;
//   inputs.value.recuring = transaction.value?.periodicity ? true : false;
//   inputs.value.periodicity = transaction.value?.periodicity || 7;
// });

const handlerChangeInputs = (value: any, type: keyof InputsTransaction) => {
  inputs.value[type] = value;
};

const validateResponse = (message: any) => {
  if (message === true) {
    messageToUser.value = "Транзакцію успішно обновлено";
    return false;
  } else {
    error.value = "Щось не вийшло!";
  }
};

const fetchTransaction = () => {
  useAuthFetch(`${useApiUrl()}/transaction_info`, {
    body: {
      transaction_id: transactionId,
    },
  }).then((res) => {
    
    inputs.value.cashier = res?.cashier;
    inputs.value.counterpartie = res?.counterpartie;
    inputs.value.sum = String(res?.sum);
    inputs.value.date = res?.date;
    inputs.value.category = res?.category;
    inputs.value.comment = res?.comment;
    inputs.value.type = res?.type;
    inputs.value.recuring = res?.periodicity ? true : false;
    inputs.value.periodicity = res?.periodicity || 7;
  });
};

const onEditTransaction = () => {
  useAuthFetch(`${useApiUrl()}/update_transaction`, {
    body: {
      transaction_id: transactionId,
      type: inputs.value.type,
      cashier: inputs.value.cashier,
      sum: +inputs.value.sum,
      counterpartie: inputs.value.counterpartie,
      date: useFormatDate(inputs.value.date),
      category: inputs.value.category,
      comment: inputs.value.comment,

      recuring: inputs.value.recuring,
      periodicity: inputs.value.periodicity,
    },
  })
    .then((res) => {
      validateResponse(res.message);
    })
    .catch((res) => {
      validateResponse(false);
    });
};

fetchTransaction();
</script>

<template>
  <LayoutProfilePage title="Редагувати транзакцію">
    <template #header>
      <UiButtonOpacityBorder @click="onEditTransaction" class="hidden lg:block">
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
        <UiButtonOpacityBorder
          @click="onEditTransaction"
          class="lg:hidden mt-[25px]"
        >
          Редагувати
        </UiButtonOpacityBorder>
      </div>
    </template>
  </LayoutProfilePage>
</template>

<style scoped></style>
