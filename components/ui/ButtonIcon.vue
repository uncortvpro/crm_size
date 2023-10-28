<script setup lang="ts">
defineProps<{
  value: string;
}>();
</script>

<template>
  <UButton
    color="white"
    class="flex-1 justify-between w-full bg-none border-none ring-0 :hover-bg-none shadow-none"
  >
    <span>{{
      value
    }}</span>
    <slot />
  </UButton>
</template>

<style scoped></style>
