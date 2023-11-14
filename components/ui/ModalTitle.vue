<script setup lang="ts">
defineProps<{
  ui?: object;
  title: string;
}>();
</script>

<template>
  <UiModal :ui="{ ...ui }">
    <div class="flex flex-col">
      <UiHeader2 class="text-center">{{ title }}</UiHeader2>
      <slot />
    </div>
  </UiModal>
</template>

<style scoped></style>
