<script setup lang="ts">
const props = defineProps<{
  variation: VariationProduct;
  modelValue: VariationProduct[];
  startItems: VariationProduct[];
}>();

const emits = defineEmits(["update:modelValue"]);

const isSelected = ref(false);

const checkSelected = computed(
  () => !!props.startItems.find((el) => el._id === props.variation._id)
);

const getStartValue = () => {
  isSelected.value = checkSelected.value;
};

const updateModelValue = () => {
  if (isSelected.value && !checkSelected.value) {
    emits("update:modelValue", [...props.modelValue, props.variation]);
    return false;
  }
  if (!isSelected.value) {
    const filterArray = props.modelValue.filter(
      (el) => el._id !== props.variation._id
    );
    emits("update:modelValue", filterArray);
  }
};

watch(isSelected, () => {
  updateModelValue();
});

getStartValue();
updateModelValue();
</script>

<template>
  <tr class="border-t border-beige-1">
    <UiTableCellPadding>
      <UiCheckbox
        v-model="isSelected"
        :ui="{ border: 'border-black', rounded: 'rounded-[2px]' }"
      ></UiCheckbox>
    </UiTableCellPadding>
    <UiTableCellPadding>
      <UiTableText>{{ variation.size }}</UiTableText>
    </UiTableCellPadding>
    <UiTableCellPadding>
      <UiTableText>{{ variation.colour }}</UiTableText>
    </UiTableCellPadding>
  </tr>
</template>

<style scoped></style>
