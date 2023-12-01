<script setup lang="ts">
const props = defineProps<{
  error: string;
  messageToUser: string;
  inputs: InputsCreateProduct;
}>();

const emits = defineEmits(["updateInputs"]);

const handlerChange = (value: any, type: keyof InputsCreateProduct) => {
  emits("updateInputs", value, type);
};

const deleteVariation = (variation: VariationProduct) => {
  const newVariations = props.inputs.variations.filter(
    (el) => el !== variation
  );

  handlerChange(newVariations, "variations");
};
</script>

<template>
  <div class="mt-[30px]">
    <UiAlertDanger v-if="error">{{ error }}</UiAlertDanger>
    <UiAlertSuccess v-if="messageToUser">{{ messageToUser }}</UiAlertSuccess>
    <div
      class="flex flex-col 2xl:grid grid-cols-12 2xl:grid-rows-product-page-grid gap-[25px] lg:gap-[30px] 2xl:gap-y-[50px] 2xl:gap-x-[100px]"
    >
      <div class="col-span-12 2xl:col-span-7">
        <form action="#">
          <UiDivBorderBg class="w-full">
            <UiDivGridForm>
              <UiHeader2 class="col-span-2"> Інформація </UiHeader2>
              <UiDivGridForm class="!grid-cols-none col-span-2 md:col-span-1">
                <UiLabelProfile
                  class="col-span-2 md:col-span-1"
                  label="Назва товару:"
                >
                  <UiInputProfile v-model="inputs.name"></UiInputProfile>
                </UiLabelProfile>
              </UiDivGridForm>
              <UiLabelProfile
                class="row-span-2 col-span-2 md:col-span-1"
                label="Опис товару:"
              >
                <UiTextareaProfile
                  v-model="inputs.description"
                  class="min-h-[80px] md:min-h-[120px]"
                ></UiTextareaProfile>
              </UiLabelProfile>
              <UiHeader2 class="col-span-2"> Додаткова інформація </UiHeader2>
              <UiLabelProfile
                class="col-span-2 md:col-span-1"
                label="Обрати статус товару:"
              >
                <CommonSelectVariant
                  v-model="inputs.status"
                  :valueSelect="inputs.status"
                  typeSelect="status"
                  typeVariant="product"
                  @updateValue="handlerChange"
                ></CommonSelectVariant>
              </UiLabelProfile>
              <UiLabelProfile class="col-span-2 md:col-span-1" label="Склад:">
                <CommonSelectWarehouse
                  v-model="inputs.warehouse"
                  :valueSelect="inputs.warehouse"
                ></CommonSelectWarehouse>
              </UiLabelProfile>
              <UiLabelProfile
                label="Підсклад:"
                class="col-span-2 md:col-span-1"
              >
                <CommonSelectSubwarehouse
                  v-model="inputs.subwarehouse"
                ></CommonSelectSubwarehouse>
              </UiLabelProfile>
              <UiLabelProfile
                class="col-span-2 md:col-span-1 row-span-2"
                label="Коментар:"
              >
                <UiTextareaProfile
                  v-model="inputs.comment"
                  class="min-h-[80px] md:h-full md:max-h-[120px]"
                ></UiTextareaProfile>
              </UiLabelProfile>
              <UiLabelProfile
                label="Категорія:"
                class="col-span-2 md:col-span-1"
              >
                <CommonSelectVariant
                  v-model="inputs.category"
                  :valueSelect="inputs.category"
                  typeSelect="category"
                  typeVariant="product_category"
                  @updateValue="handlerChange"
                ></CommonSelectVariant>
              </UiLabelProfile>
            </UiDivGridForm>
          </UiDivBorderBg>
        </form>
      </div>
      <div
        class="col-span-12 2xl:col-span-5 2xl:row-span-6 flex flex-col gap-[25px] lg:gap-[30px]"
      >
        <UiDivBorderBg class="flex flex-col items-center">
          <UiHeader2 class="text-center mb-[15px] block xl:mb-[20px]"
            >Фото</UiHeader2
          >
          <PagesAddingPhotoProduct
            v-model="inputs.photo"
          ></PagesAddingPhotoProduct>
        </UiDivBorderBg>
        <PagesAddProductVariations
          v-model="inputs.variations"
        ></PagesAddProductVariations>
      </div>
      <div class="col-span-12 2xl:col-span-7">
        <CommonTable
          v-if="inputs.variations.length > 0"
          :pagination="false"
          class="bg-beige-light !m-0"
        >
          <template #headers>
            <UiTableCellHeader></UiTableCellHeader>
            <UiTableCellHeader>Розмір</UiTableCellHeader>
            <UiTableCellHeader>Колір</UiTableCellHeader>
            <UiTableCellHeader>Собівартість товару</UiTableCellHeader>
            <UiTableCellHeader>Ціна</UiTableCellHeader>
            <UiTableCellHeader>Кількість на складі</UiTableCellHeader>
          </template>
          <template #items>
            <CommonTableItemVariation
              v-for="(variation, index) in inputs.variations"
              :key="index"
              :variation="variation"
              @deleteAction="deleteVariation(variation)"
            ></CommonTableItemVariation>
          </template>
        </CommonTable>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
