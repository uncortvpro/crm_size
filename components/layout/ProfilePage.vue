<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="mb-[15px] xl:mb-[25px]">
    <div
      class="flex items-center justify-between mt-[20px] mb-[15px] xl:mb-[25px] lg:mt-[36px]"
    >
      <UiHeader1>{{ title }}</UiHeader1>
      <slot name="header" />
    </div>
    <slot name="content" />
  </div>
</template>

<style scoped></style>
