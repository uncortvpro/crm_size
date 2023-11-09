<script setup lang="ts">
defineProps<{
  letter: string;
}>();


</script>

<template>
  <div
    class="w-[20px] h-[20px] md:w-[29px] md:h-[29px] bg-black rounded-[50%] flex justify-center items-center text-white text-[10px] md:text-[14px] font-semibold uppercase"
  >
    <span>{{ letter }}</span>
  </div>
</template>

<style scoped></style>
