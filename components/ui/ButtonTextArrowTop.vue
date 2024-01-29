<script setup lang="ts"></script>

<template>
  <UiButtonText class="!text-[12px] flex gap-[5px]">
    <span><slot /></span>
    <SvgoArrowRight
      color="black"
      class="rotate-[-90deg] stroke-black"
    ></SvgoArrowRight>
  </UiButtonText>
</template>

<style scoped></style>
