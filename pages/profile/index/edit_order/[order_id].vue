<script setup lang="ts">
const route = useRoute();
definePageMeta({
  middleware: ["only-finance"],
});

const error = ref("");
const messageToUser = ref("");
const orderId = computed(() => route.params.order_id);
const order = ref<Order>();

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

const handlerChangeInputs = (value: any, type: keyof Order) => {
  inputs.value[type] = value;
};

const fetchOrderInfo = () => {
  useAuthFetch(`${useApiUrl()}/order_info`, {
    body: {
      order_id: orderId.value,
    },
  }).then((res) => {
    inputs.value.client = res?.client;
    inputs.value.email = res?.email;
    inputs.value.payment = res?.payment;
    inputs.value.shipping = res?.shipping;
    inputs.value.source = res?.source;
    inputs.value.status = res?.status?.status;
    inputs.value.comment = res?.comment;


    inputs.value.products = res?.variations;

    order.value = res;
  });
};

const validateResponse = (message: any) => {
  if (message === true) {
    messageToUser.value = "Замовлення успішно обновлено";
    return false;
  } else {
    error.value = "Щось не вийшло!";
  }
};

const updateOrder = () => {
  //make a number for the amount of variation
  const variations = inputs.value.products.map((el: VariationProduct) => {
    return {
      ...el,
      amount: el.amount ? +el.amount : 0,
    };
  });
  //end

  useAuthFetch(`${useApiUrl()}/update_order`, {
    body: {
      order_id: orderId.value,
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

fetchOrderInfo();
</script>

<template>
  <LayoutProfilePage isButtonBack title="Редагувати замовлення">
    <template #header>
      <UiButtonOpacityBorder @click="updateOrder" class="hidden lg:block">
        Оновити
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
        <UiButtonOpacityBorder @click="updateOrder" class="lg:hidden mt-[25px]">
          Оновити
        </UiButtonOpacityBorder>
      </div>
    </template>
  </LayoutProfilePage>
</template>

<style scoped></style>
