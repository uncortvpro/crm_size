<script setup lang="ts"></script>

<template>
  <div
    class="border-[2px] flex items-center justify-between max-w-[182px]  xl:max-w-[312px] border-black rounded-[5px]"
  >
   <input type="text" class="text-[11px] focus:border-none focus:outline-none py-[8px] px-[16px] xl:py-[12px] xl:px-[24px] bg-transparent xl:text-[15px] w-full font-medium placeholder:text-black" placeholder="Пошук">
   <button class="mr-[10px] xl:mr-[12px]">
    <SvgoSearch class="!w-[12px] !h-[12px] xl:!w-[18px] xl:!h-[18px]"></SvgoSearch>
   </button> 
  </div>
</template>

<style scoped></style>
