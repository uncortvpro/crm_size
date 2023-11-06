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
  <textarea
    :value="modelValue"
    @input="handleInput"
    class="bg-beige rounded-[3px] text-[9px] md:text-[12px] no_scroll_bar resize-none focus:outline-none p-[10px]"
    resize="false"
  >
  </textarea>
</template>

<style scoped></style>
