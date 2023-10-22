<script setup lang="ts">
defineProps<{
  to: string;
}>();
</script>

<template>
  <NuxtLink class="font-medium text-black hover:opacity-[60%] cursor-pointer text-[11px] duration-200  md:text-[15px] lg:text-[17px] xl:text-[20px] uppercase" :to="to"><slot /></NuxtLink>
</template>

<style scoped></style>
