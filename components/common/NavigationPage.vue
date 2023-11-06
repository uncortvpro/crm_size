<script setup lang="ts">
const emits = defineEmits(["search", "add"]);

const search = (search: string) => {
  emits("search", search);
};

const add = () => {
  emits("add");
};
</script>

<template>
  <div class="flex justify-between gap-[15px] items-center">
    <UiButtonOpacityBorderAddItem @click="add" class="flex-shrink-0">
      <slot name="add_name"></slot>
    </UiButtonOpacityBorderAddItem>
    <CommonSearchBorder @search="search" />
  </div>
</template>

<style scoped></style>
