<script setup lang="ts">
const props = defineProps<{
  variations: VariationProduct[];
  selectedVariations: VariationProduct[];
}>();

const emits = defineEmits(["update:selectedVariations", "closeModal"]);

const updateSelectedVariations = () => {
  emits("update:selectedVariations", selectedItems.value);
  emits("closeModal");
};

const selectedItems = ref<VariationProduct[]>([]);

const getStartValue = () => {
  selectedItems.value = props.selectedVariations;
};

watchDeep(props.selectedVariations, () => {
  getStartValue();
});

getStartValue();
</script>

<template>
  <UiModalTitle title="Оберіть варіації">
    <UiDivBorderBg>
      <table class="table-auto w-full">
        <thead>
          <UiTableCellHeader></UiTableCellHeader>
          <UiTableCellHeader>Розмір</UiTableCellHeader>
          <UiTableCellHeader>Колір</UiTableCellHeader>
        </thead>
        <tbody>
          <PagesTableItemAddVariationToOrder
            v-for="variation in variations"
            :key="variation._id"
            :variation="variation"
            v-model="selectedItems"
            :startItems="selectedVariations"
          ></PagesTableItemAddVariationToOrder>
        </tbody>
      </table>
    </UiDivBorderBg>

    <!-- <CommonTable class="bg-beige-light" :noMobile="true" :pagination="false">
      <template #headers>
        <UiTableCellHeader></UiTableCellHeader>
        <UiTableCellHeader>Розмір</UiTableCellHeader>
        <UiTableCellHeader>Колір</UiTableCellHeader>
      </template>
      <template #items>
        <PagesTableItemAddVariationToOrder
          v-for="variation in variations"
          :key="variation._id"
          :variation="variation"
        ></PagesTableItemAddVariationToOrder>
      </template>
    </CommonTable> -->

    <UiButtonOpacityBorder
      :disabled="false"
      @click="updateSelectedVariations"
      class="self-center mt-[25px]"
      >Зберегти</UiButtonOpacityBorder
    >
  </UiModalTitle>
</template>

<style scoped></style>
