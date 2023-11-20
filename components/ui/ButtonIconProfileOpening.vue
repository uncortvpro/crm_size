<script setup lang="ts">
defineProps<{
  value: string;
  open: boolean;
}>();
</script>

<template>
  <UiButtonIconProfile :value="value" :open="open">
    <UIcon
      name="i-heroicons-chevron-right-20-solid"
      class="transition-transform rotate-90 w-[20px] h-[20px]"
      :class="[open && 'transform rotate-[270deg]']"
    />
  </UiButtonIconProfile>
</template>

<style scoped></style>
