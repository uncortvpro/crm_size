<script setup lang="ts"></script>

<template>
  <h3 class="flex items-center gap-[5px] md:gap-[15px] xl:gap-[20px]">
    <span class="w-[10px] h-[10px] md:w-[20px] md:h-[20px] xl:w-[30px] xl:h-[30px] bg-gradient-to-r rounded-[50%] from-beige-1 to-transparent"></span>
    <UiTextMainPrimary>
      <slot />
    </UiTextMainPrimary>
  </h3>
</template>

<style scoped></style>
