<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <div>
    <div
      class="flex items-center justify-between mt-[20px] lg:mt-[36px] mb-[15px] xl:mb-[25px]"
    >
      <UiHeader1>{{ title }}</UiHeader1>
      <slot name="header" />
    </div>
    <slot name="content" />
  </div>
</template>

<style scoped></style>
