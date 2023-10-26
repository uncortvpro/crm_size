<script setup lang="ts">
definePageMeta({
  layout: "profile",
  middleware: ["auth"],
});
</script>

<template>
  <div class="grid grid-cols-2">
    <div class="row-span-2">
      <CommonMenuProfileList class="hidden lg:block"></CommonMenuProfileList>
    </div>
    <div class="hidden lg:block">
      <div class="flex items-center justify-end gap-[35px]">
        <UiButtonOpacitySettings />
        <UiButtonOpacityNotifications :countNotification="55" />
        <UiButtonOpacityUser class="">
          <template #name> Дмитро Волошин </template>
          <template #image>
            <img class="w-full h-full" src="@img/user.jpg" alt="" />
          </template>
        </UiButtonOpacityUser>
      </div>
    </div>
    <div>
      <NuxtPage></NuxtPage>
    </div>
  </div>
</template>

<style scoped></style>
