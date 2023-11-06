<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <div>
    <div
      class="flex items-center justify-between lg:mt-[40px] 2xl:mt-[60px] 4xl:mt-[79px]"
    >
      <UiHeader1>{{ title }}</UiHeader1>
      <slot name="header" />
    </div>
    <slot name="content" />
  </div>
</template>

<style scoped></style>
