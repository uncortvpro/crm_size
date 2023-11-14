<script setup lang="ts">
defineProps<{
  color: string;
}>();
</script>

<template>
  <p
    :style="`background: ${color}30; color: ${color}; border-color: ${color};`"
    class="px-[8px] inline-block md:px-[10px] py-[4px] md:py-[5px] font-medium text-[9px] md:text-[12px] rounded-[3px] text-center border-black border"
  >
    <slot />
  </p>
</template>

<style scoped></style>
