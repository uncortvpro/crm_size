<script setup lang="ts">
definePageMeta({
  layout: "profile",
  middleware: ["auth"],
});
</script>

<template>
  <div class="lg:grid relative grid-cols-profile-section 4xl:grid-cols-profile-section-4xl">
    <div
      class="hidden lg:block sticky top-0 rounded-r-[20px] max-h-[700px] h-[100vh] overflow-x-scroll scroll_bar px-[30px] pt-[30px] 4xl:px-[44px] 4xl:pt-[44px] bg-beige"
    >
      <CommonLogo></CommonLogo>
      <CommonMenuProfileList
        class="flex flex-col gap-[32px] lg:mt-[30px] 2xl:mt-[39px]"
      ></CommonMenuProfileList>
    </div>
    <div class="lg:px-[30px] lg:py-[30px] 4xl:px-[44px] 4xl:py-[44px]">
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
      <div class="container relative  lg:container-reset">
        <NuxtPage></NuxtPage>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
