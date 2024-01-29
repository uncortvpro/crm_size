<script setup lang="ts">
defineProps<{
  sortingUp: boolean;
  sortingDown: boolean;
}>();
</script>

<template>
  <UiButtonText class="!text-[12px] flex gap-[5px]">
    <span><slot /></span>
    <SvgoArrowRight
      v-if="sortingUp || sortingDown"
      color="black"
      :class="
        cn('rotate-[-90deg] stroke-beige-2', { 'rotate-[90deg]': sortingDown })
      "
    ></SvgoArrowRight>
  </UiButtonText>
</template>

<style scoped></style>
