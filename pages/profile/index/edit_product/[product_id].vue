<script setup lang="ts">
const route = useRoute();
const error = ref("");
const messageToUser = ref("");

const productId = computed(() => route.params.product_id);

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

const validateResponse = (message: any) => {
  if (message === true) {
    messageToUser.value = "Товар успішно обновлено";
    return false;
  } else {
    error.value = "Щось не вийшло!";
  }
};

const handlerChangeInputs = (value: any, type: keyof InputsCreateProduct) => {
  inputs.value[type] = value;
};

const fetchProduct = () => {
  useAuthFetch(`${useApiUrl()}/product_info`, {
    body: {
      product_id: productId.value,
    },
  }).then((res) => {
    inputs.value.name = res.product_info.name;
    inputs.value.description = res.product_info.description;
    inputs.value.status = res.product_info.status.status;
    inputs.value.category = res.product_info.category;
    inputs.value.warehouse = res.product_info.warehouse;
    inputs.value.subwarehouse = res.product_info.subwarehouse;
    inputs.value.comment = res.product_info.comment;
    inputs.value.photo = res.product_info.photo;
    inputs.value.variations = res.product_info.variations.map((el: any) => {
      return {
        size: el.size,
        colour: el.colour,
        price: String(el.price),
        in_stock: String(el.in_stock),
        photos: el.photos[0],
        // cost_price: el.cost_price,
      };
    });
  });
};

const onEditProduct = () => {
  useAuthFetch(`${useApiUrl()}/update_product`, {
    body: {
      product_id: productId.value,
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
          // cost_price: el.cost_price,
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

fetchProduct();
</script>

<template>
  <LayoutProfilePage title="Редагувати товар">
    <template #header>
      <UiButtonOpacityBorder @click="onEditProduct" class="hidden lg:block">
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
        <UiButtonOpacityBorder
          @click="onEditProduct"
          class="lg:hidden mt-[25px]"
        >
          Редагувати
        </UiButtonOpacityBorder>
      </div>
    </template>
  </LayoutProfilePage>
</template>

<style scoped></style>
