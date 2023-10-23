<script setup lang="ts"></script>

<template>
  <button
    class="flex items-center gap-[8px] justify-center hover:opacity-hover duration-200 rounded-[5px] border-[2px] py-[8px] lg:py-[18px] border-black border-solid"
  >
    <SvgoGoogle class="google" />
    <span class="text-[11px] md:text-[15px] font-medium lg:text-[20px]"
      ><slot
    /></span>
  </button>
</template>

<style>
.google.nuxt-icon--fill,
.google.nuxt-icon--fill * {
  fill: revert-layer !important;
}
</style>
