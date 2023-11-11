<script setup lang="ts"></script>

<template>
  <div class="grid grid-cols-3 sm:grid-cols-4 gap-[20px] md:px-[10px] py-[15px] border-beige-1 border-b">
    <p class="text-[9px] md:text-[12px] font-normal text-black">
      <slot name="header"></slot>
    </p>
    <p class="text-[9px] col-span-2 sm:col-span-3 md:text-[12px] font-normal text-black">
      <slot name="content"></slot>
    </p>
  </div>
</template>

<style scoped></style>
