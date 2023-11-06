<script setup lang="ts">
defineProps<{
  modelValue?: string;
}>();

const emits = defineEmits(["update:modelValue"]);

const handleInput = (event: Event) => {
  const inputValue = (event.target as HTMLInputElement).value;
  emits("update:modelValue", inputValue);
};
</script>

<template>
  <input
    :value="modelValue"
    @input="handleInput"
    class="input_without_arrow rounded-[3px] text-[9px] md:text-[12px] bg-beige h-[25px]  md:h-[35px] px-[10px] focus:outline-none md:px-[15px]"
  />
</template>

<style scoped></style>
