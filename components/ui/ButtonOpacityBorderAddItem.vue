<script setup lang="ts"></script>

<template>
  <UiButtonOpacityBorder class="flex items-center gap-[10px]">
    <SvgoCrossInCircle class="!mb-0"></SvgoCrossInCircle>
    <span class="text-black font-medium text-[11px] xl:text-[15px]"><slot /></span>
  </UiButtonOpacityBorder>
</template>

<style scoped></style>
