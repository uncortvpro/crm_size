<script setup lang="ts">
const router = useRouter();
</script>

<template>
  <UiButtonOpacity @click="router.push('/profile')" class="flex lg:w items-center gap-[15px]">
    <span class="hidden lg:inline-block lg:text-[15px] lg:w-[75px] leading-[130%] text-left font-medium text-black"><slot name="name"></slot></span>
    <span
    class="overflow-hidden rounded-[50%] inline-block w-[20px] h-[20px] lg:w-[45px] lg:h-[45px]"  
    >
      <slot name="image"></slot>
    </span>
  </UiButtonOpacity>
</template>

<style scoped></style>
