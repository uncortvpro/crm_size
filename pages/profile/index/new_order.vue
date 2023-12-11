<script setup lang="ts">
const error = ref("");
const messageToUser = ref("");

const inputs = ref<InputsCreateOrder>({
  client: "",
  email: "",
  comment: "",
  payment: "",
  shipping: "",
  source: "",
  status: "",
  products: [],
});

const handlerChangeInputs = (value: any, type: keyof InputsCreateOrder) => {
  inputs.value[type] = value;
};

const validateResponse = (message: any) => {
  if (message === true) {
    messageToUser.value = "Замовлення успішно створено";
    inputs.value = {} as InputsCreateOrder;
    return false;
  } else {
    error.value = "Щось не вийшло!";
  }
};

const onCreateOrder = () => {
  //make a number for the amount of variation
  const variations = inputs.value.products.map((el) => {
    return {
      ...el,
      amount: el.amount ? +el.amount : 0,
    };
  });
  //end

  useAuthFetch(`${useApiUrl()}/add_order`, {
    body: {
      client: inputs.value.client,
      email: inputs.value.email,
      shipping: inputs.value.shipping,
      status: inputs.value.status,
      source: inputs.value.source,
      payment: inputs.value.payment,
      comment: inputs.value.comment,
      variations: variations,
    },
  })
    .then((res: any) => {
      validateResponse(res.message);
    })
    .catch((res) => {
      validateResponse(res);
      console.log(res);
    });
};
</script>

<template>
  <LayoutProfilePage title="Додати замовлення">
    <template #header>
      <UiButtonOpacityBorder @click="onCreateOrder" class="hidden lg:block">
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
        <UiButtonOpacityBorder
          @click="onCreateOrder"
          class="lg:hidden mt-[25px]"
        >
          Створити
        </UiButtonOpacityBorder>
      </div>
    </template>
  </LayoutProfilePage>
</template>

<style scoped></style>
