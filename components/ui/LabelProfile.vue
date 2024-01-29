<script setup lang="ts">
const props = defineProps<{
  label: string;
  noLabelTruncate?: boolean;
}>();
</script>

<template>
  <label class="flex flex-col gap-[3px]" for="">
    <UiTextPrimaryProfile
      :class="
        cn('', {
          truncate: !noLabelTruncate,
        })
      "
      >{{ label }}</UiTextPrimaryProfile
    >
    <slot />
  </label>
</template>

<style scoped></style>
