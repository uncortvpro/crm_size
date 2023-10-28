<script setup lang="ts">
defineProps<{
  value: string;
  open?: boolean;
}>();
</script>

<template>
  <UButton
    color="gray"
    class="flex-1 justify-between w-full shadow-none rounded-[3px] hover:bg-beige bg-beige ring-0 h-[25px] px-[10px] md:h-[35px] md:px-[15px]"
  >
    <span class="text-black text-[9px] md:text-[12px] leading-[135%]">{{
      value
    }}</span>
    <UIcon
      name="i-heroicons-chevron-right-20-solid"
      class="transition-transform rotate-90 w-[20px] h-[20px]"
      :class="[open && 'transform rotate-[270deg]']"
    />
  </UButton>
</template>

<style scoped></style>
