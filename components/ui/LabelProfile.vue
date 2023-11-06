<script setup lang="ts">
const props = defineProps<{
  label: string;
}>();
</script>

<template>
  <label class="flex flex-col gap-[3px] " for="">
    <UiTextPrimaryProfile class="truncate">{{ label }}</UiTextPrimaryProfile>
    <slot />
  </label>
</template>

<style scoped></style>
