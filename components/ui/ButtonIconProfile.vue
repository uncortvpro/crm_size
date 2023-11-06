<script setup lang="ts">
defineProps<{
  value: string;
}>();
</script>

<template>
  <UiButtonIcon
    :value="value"
    color="gray"
    class="shadow-none rounded-[3px] text-black text-[9px] md:text-[12px] leading-[135%] hover:bg-beige bg-beige ring-0 h-[25px] px-[10px] md:h-[35px] md:px-[15px]"
  >
    <slot />
  </UiButtonIcon>
</template>

<style scoped></style>
