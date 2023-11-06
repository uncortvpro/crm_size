<script setup lang="ts">
const props = defineProps<{
  vIf: boolean;
}>();
</script>

<template>
  <UiTransitionTableItem>
    <UiTableCell v-if="vIf">
      <template #title> <slot name="title" /></template>
      <template #value><slot name="value" /></template>
    </UiTableCell>
  </UiTransitionTableItem>
</template>

<style scoped></style>
