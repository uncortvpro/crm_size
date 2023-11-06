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
    class="rounded-[5px] border input_without_arrow border-[#DCDCDC] h-[35px] md:h-[40px] lg:h-[50px] xl:h-[60px] focus:outline-none px-[10px]"
  />
</template>

<style scoped></style>
