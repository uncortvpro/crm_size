<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <div>
    <UiTitlePageText>{{ title }}</UiTitlePageText>
    <slot />
  </div>
</template>

<style scoped></style>
