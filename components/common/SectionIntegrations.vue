<template>
  <div class="mt-[70px] md:mt-[90px] xl:mt-[110xp] 3xl:mt-[130px]">
    <div class="container">
      <UiDivBorderBg
        class="!bg-beige flex flex-col gap-[18px] md:gap-[25px] xl:gap-[40px]"
      >
        <UiTitleSection class="text-center md:!text-[30px]"
          >Інтеграції з різними платформами без складнощів</UiTitleSection
        >
        <div
          class="max-w-[955px] self-center w-full flex gap-[30px] justify-between xl:justify-evenly"
        >
          <div class="flex">
            <img class="object-contain" src="@img/shopify.png" alt="" />
          </div>
          <div class="flex justify-center">
            <img class="object-contain" src="@img/telegram.png" alt="" />
          </div>
          <div class="flex justify-center">
            <img class="object-contain" src="@img/google.png" alt="" />
          </div>
          <div class="flex justify-end">
            <img class="object-contain" src="@img/gmail.png" alt="" />
          </div>
        </div>
      </UiDivBorderBg>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
