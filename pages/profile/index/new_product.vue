<script setup lang="ts">
const error = ref("");
const messageToUser = ref("");

const inputs = ref<InputsCreateProduct>({
  name: "",
  description: "",
  status: "",
  status_type: "product",
  category: "",
  warehouse: "",
  subwarehouse: "",
  comment: "",
  photo: "",
  variations: [],
});

const handlerChangeInputs = (value: any, type: keyof InputsCreateProduct) => {
  inputs.value[type] = value;
};
const validateResponse = (message: any) => {
  if (message === true) {
    messageToUser.value = "Товар успішно створено";
    return false;
  } else {
    error.value = "Щось не вийшло!";
  }
};

const onCreateProduct = () => {
  useAuthFetch(`${useApiUrl()}/add_product`, {
    body: {
      name: inputs.value.name,
      description: inputs.value.description,
      status: inputs.value.status,
      status_type: "product",
      category: inputs.value.category,
      warehouse: inputs.value.warehouse,
      subwarehouse: inputs.value.subwarehouse,
      comment: inputs.value.comment,
      photo: inputs.value.photo,
      variations: inputs.value.variations.map((el) => {
        return {
          size: el.size,
          colour: el.colour,
          price: +el.price,
          in_stock: +el.in_stock,
          photos: [el.photos],
          cost_price: el.cost_price, 
        };
      }),
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
  <LayoutProfilePage title="Додати товар">
    <template #header>
      <UiButtonOpacityBorder @click="onCreateProduct" class="hidden lg:block">
        Створити
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
        <UiButtonOpacityBorder
          @click="onCreateProduct"
          class="lg:hidden mt-[25px]"
        >
          Створити
        </UiButtonOpacityBorder>
      </div>
    </template>
  </LayoutProfilePage>
</template>

<style scoped></style>
