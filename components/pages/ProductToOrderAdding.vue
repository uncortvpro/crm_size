<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";

const props = defineProps<{
  modelValue: VariationProduct[];
}>();

const emits = defineEmits(["update:modelValue"]);
const handleInput = (value: VariationProduct[]) => {
  emits("update:modelValue", value);
};
const ordersStore = useOrdersStore();

const isModalVariations = ref(false);
const hiddenOutsideClickElement = ref(null);
const addedProducts = ref<VariationProduct[]>([]);
const currentProductId = ref("");
const isShowResult = ref(false);

const productsSearch = computed<any>(() => ordersStore.addingProducts);

const getCurrentProduct = computed(() => {
  const currentProduct: GlobalProduct = productsSearch.value.find(
    (el: GlobalProduct) => el._id === currentProductId.value
  );

  return currentProduct;
});

const getCurrentVariations = computed(() => {
  return getCurrentProduct.value.variations.map((el) => {
    return {
      ...el,
      category: getCurrentProduct.value.category,
    };
  });
});

const switchModalVariations = (value: boolean) => {
  isModalVariations.value = value;
};

const setCurrentProductId = (id: string) => {
  currentProductId.value = id;
};

const actionClickCurrentProduct = (id: string) => {
  setCurrentProductId(id);
  switchModalVariations(true);
};

const getStartProductsValue = () => {
  addedProducts.value = props.modelValue;
};

const searchProducts = async (value: string) => {
  await ordersStore.searchProducts(value);
  isShowResult.value = true;
};

// const addProduct = (product: any) => {
//   ////////////////////////////////////////////////
//   handleInput([...props.modelValue, product._id]);
//   // addedProducts.value = [...addedProducts.value, product];
// };

const deleteProduct = (id: string) => {
  const newArrayId = props.modelValue.filter((el) => el._id !== id);
  const newArrayProducts = addedProducts.value.filter(
    (el: any) => el._id !== id
  );

  handleInput(newArrayId);
  addedProducts.value = newArrayProducts;
};

const onFocusOut = () => {
  isShowResult.value = false;
};
onClickOutside(hiddenOutsideClickElement, (event) => onFocusOut());

watchDeep(addedProducts, () => {
  handleInput(addedProducts.value);
});

watchDeep(
  () => props.modelValue,
  () => {
    getStartProductsValue();
  }
);

getStartProductsValue();
</script>

<template>
  <UiDivBorderBg class="w-full flex flex-col">
    <UiHeader2 class="text-center"> Додати товари </UiHeader2>
    <PagesModalAddVariationToOrder
      v-if="currentProductId"
      v-model="isModalVariations"
      v-model:selectedVariations="addedProducts"
      :variations="getCurrentVariations"
      @closeModal="switchModalVariations(false)"
    ></PagesModalAddVariationToOrder>
    <div class="relative z-50" ref="hiddenOutsideClickElement">
      <CommonSearchBorder
        theme="beige"
        class="mt-[15px] xl:mt-[25px]"
        @search="searchProducts"
      />
      <div
        v-if="isShowResult"
        class="absolute top-[100%] left-0 w-full bg-beige max-h-[300px] overflow-y-scroll scroll_bar"
      >
        <div>
          <UiButton
            v-for="product in productsSearch"
            :key="product._id"
            @click="actionClickCurrentProduct(product._id)"
            class="text-[9px] md:text-[12px] flex gap-[10px] items-center truncate px-[7px] py-[10px] md:px-[10px] md:pt-[15px] duration-hover hover:bg-beige-1 w-full text-left"
          >
            <img
              v-if="product.photo"
              :src="useBase64(product.photo) || undefined"
              alt=""
              class="w-[23px] h-[28px] object-cover"
            />
            {{ product.name }}
          </UiButton>
          <p
            v-if="productsSearch.length === 0"
            class="text-[9px] md:text-[12px] truncate px-[7px] py-[10px] md:px-[10px] md:pt-[15px] w-full text-left"
          >
            Не знайдено
          </p>
        </div>
      </div>
    </div>
    <div>
      <CommonTable
        v-if="addedProducts.length > 0"
        :pagination="false"
        class="!mt-[20px]"
      >
        <template #headers>
          <UiTableCellHeader></UiTableCellHeader>
          <UiTableCellHeader>Найменування</UiTableCellHeader>
          <UiTableCellHeader>Розмір</UiTableCellHeader>
          <UiTableCellHeader>Кількість</UiTableCellHeader>
          <UiTableCellHeader>На складі</UiTableCellHeader>
          <UiTableCellHeader>Ціна</UiTableCellHeader>
        </template>
        <template #items>
          <CommonTableItemOrderProduct
            v-for="(product, index) in addedProducts"
            :key="index"
            :product="product"
            @deleteAction="deleteProduct(product._id || '')"
          ></CommonTableItemOrderProduct>
        </template>
      </CommonTable>
    </div>
  </UiDivBorderBg>
</template>

<style scoped></style>
