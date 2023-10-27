<script setup lang="ts"></script>

<template>
  <div
    class="p-[20px] 2xl:p-[30px] mt-[29px] 2xl:mt-[35px] rounded-[10px] 2xl:rounded-[20px] bg-beige"
  >
    <table class="table-auto w-full">
      <thead>
        <tr class="hidden 3xl:table-row border-b border-beige-1">
          <slot name="headers"></slot>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <slot name="items"></slot>
      </tbody>
    </table>
    <div class="flex mt-[15px] items-center justify-between md:justify-end gap-[20px] xl:gap-[40px]">
      <UiButtonTextArrowLeft disabled>Попередня сторінка</UiButtonTextArrowLeft>
      <UiButtonTextArrowRight>Наступна сторінка</UiButtonTextArrowRight>
    </div>
  </div>
</template>

<style scoped></style>
