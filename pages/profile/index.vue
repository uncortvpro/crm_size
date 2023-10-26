<script setup lang="ts">
definePageMeta({
  layout: "profile",
  middleware: ["auth"],
});
</script>

<template>
  <div class="grid relative grid-cols-profile-section">
    <div
      class="hidden lg:block rounded-r-[20px] min-h-[700px] px-[30px] pt-[30px] 2xl:px-[44px] 2xl:pt-[44px] bg-beige"
    >
      <CommonLogo></CommonLogo>
      <CommonMenuProfileList
        class="flex flex-col gap-[32px] lg:mt-[30px] 2xl:mt-[39px]"
      ></CommonMenuProfileList>
    </div>
    <div class="lg:px-[30px] lg:py-[30px] 2xl:px-[44px] 2xl:py-[44px]">
      <div class="hidden lg:flex items-center justify-end gap-[35px]">
        <UiButtonOpacitySettings />
        <UiButtonOpacityNotifications :countNotification="55" />
        <UiButtonOpacityUser class="">
          <template #name> Дмитро Волошин </template>
          <template #image>
            <img class="w-full h-full" src="@img/user.jpg" alt="" />
          </template>
        </UiButtonOpacityUser>
      </div>
      <div class="container relative mt-[33px] lg:container-reset">
        <NuxtPage></NuxtPage>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
