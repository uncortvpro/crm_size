<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";

const props = defineProps<{
  modelValue: any[];
  startProducts?: any[];
}>();
const emits = defineEmits(["update:modelValue"]);

const handleInput = (value: string[]) => {
  emits("update:modelValue", value);
};
const hiddenOutsideClickElement = ref(null);

const ordersStore = useOrdersStore();

const productsSearch = computed<any>(() => ordersStore.addingProducts);
const addedProducts = ref<any>([]);

const getStartProductsValue = () => {
  if (!props.startProducts) return false;

  props.startProducts.forEach(el => {
    handleInput([...props.modelValue, el._id]);
  })
  addedProducts.value = props.startProducts || [];
};

const searchProducts = async (value: string) => {
  await ordersStore.searchProducts(value);
  isShowResult.value = true;
};

const isShowResult = ref(false);

const onFocusOut = () => {
  isShowResult.value = false;
};

const addProduct = (product: any) => {
  handleInput([...props.modelValue, product._id]);
  addedProducts.value = [...addedProducts.value, product];
};

const deleteProduct = (id: string) => {
  const newArrayId = props.modelValue.filter((el) => el !== id);
  const newArrayProducts = addedProducts.value.filter(
    (el: any) => el._id !== id
  );

  handleInput(newArrayId);
  addedProducts.value = newArrayProducts;
};

onClickOutside(hiddenOutsideClickElement, (event) => onFocusOut());

watchDeep(
  () => props.startProducts,
  () => {
    console.log(props.startProducts);

    getStartProductsValue();
  }
);
</script>

<template>
  <UiDivBorderBg class="w-full flex flex-col">
    <UiHeader2 class="text-center"> Додати товари </UiHeader2>
    <div class="relative" ref="hiddenOutsideClickElement">
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
            @click="addProduct(product)"
            class="text-[9px] md:text-[12px] flex gap-[10px] items-center truncate px-[7px] py-[10px] md:px-[10px] md:pt-[15px] duration-hover hover:bg-beige-1 w-full text-left"
          >
            <img
              v-if="product.photos[0]"
              :src="useBase64(product.photos[0]) || undefined"
              alt=""
              class="w-[23px]h-[28px] object-cover"
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
          <UiTableCellHeader>Ціна</UiTableCellHeader>
        </template>
        <template #items>
          <CommonTableItemOrderProduct
            v-for="(product, index) in addedProducts"
            :key="index"
            :product="product"
            @deleteAction="deleteProduct"
          ></CommonTableItemOrderProduct>
        </template>
      </CommonTable>
    </div>
  </UiDivBorderBg>
</template>

<style scoped></style>
