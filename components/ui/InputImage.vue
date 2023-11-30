<script setup lang="ts">
const props = defineProps<{
  modelValue?: any;
  typeInput?: string;
  uploadedPhoto?: any;
}>();

const emits = defineEmits(["updateInput", "update:modelValue"]);

const file = ref(null);
const handlerChange = (value: any) => {
  file.value = value;
};
const getImageUrl = computed<string>(() =>
  file.value ? URL.createObjectURL(file.value) : ""
);

watch(
  file,
  () => {
    emits("updateInput", file.value, props?.typeInput);
    emits("update:modelValue", file.value);
  },
  { deep: true }
);
</script>

<template>
  <slot
    name="input_box"
    :image="useBase64(uploadedPhoto) || getImageUrl"
    :updateInput="handlerChange"
  ></slot>
</template>

<style scoped></style>
