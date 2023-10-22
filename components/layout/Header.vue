<script setup lang="ts">
const router = useRouter();
const isMobileMenu = ref(false);

const switchMenu = (value: boolean) => {
  isMobileMenu.value = value;
};
</script>

<template>
  <header class="container">
    <nav class="bg-white dark:bg-gray-900 w-full z-20">
      <div class="flex flex-wrap items-center justify-between mx-auto py-4">
        <CommonLogo
          href="https://flowbite.com/"
          class="flex items-center"
        ></CommonLogo>
        <div class="flex lg:order-2">
          <UiButtonText class="hidden lg:block" @click="router.push('/register')" type="button">
            РЕЄСТРАЦІЯ
          </UiButtonText>
          <UiButtonPrimary type="button" @click="router.push('/authorize')">
            УВІЙТИ
          </UiButtonPrimary>
          <CommonButtonBurger
            class="self-center ml-[15px] lg:hidden"
            :isActive="isMobileMenu"
            @click="switchMenu(!isMobileMenu)"
          />
        </div>
        <CommonMenuList :isActive="isMobileMenu" />
      </div>
    </nav>
  </header>
</template>

<style scoped></style>
