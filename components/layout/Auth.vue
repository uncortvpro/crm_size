<script setup lang="ts"></script>

<template>
  <div class="min-h-[100vh] bg-auth-bg flex-1 flex justify-center items-center">
    <div
      class="rounded-[5px] shadow-auth-shadow shadow-gray-300 pt-[35px] px-[20px] pb-[15px] lg:pt-[55px] lg:px-[40px] lg:pb-[30px]"
    >
      <slot />
    </div>
  </div>
</template>
<style scoped></style>
