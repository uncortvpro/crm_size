<script setup lang="ts">
const router = useRouter();
definePageMeta({
  layout: "without-header-footer",
});
</script>

<template>
  <LayoutAuth>
    <div
      class="rounded-[5px] bg-white max-w-[560px] w-full shadow-auth-shadow mx-[15px] my-[50px] shadow-gray-300 pt-[35px] px-[20px] pb-[15px] lg:pt-[55px] lg:px-[40px] lg:pb-[30px]"
    >
      <form action="#">
        <h5
          class="font-semibold uppercase text-[18px] text-center md:text-[24px] lg:text-[28px] xl:text-[30px]"
        >
          АВТОРИЗАЦІЯ
        </h5>
        <!-- <p class="text-center text-[9px] lg:text-[15px] mt-[12px] lg:mt-[20px]">
          або
        </p> -->
        <div
          class="mt-[12px] lg:mt-[20px] gap-y-[12px] md:gap-y-[20px] md:gap-x-[20px] grid"
        >
          <UiInputLabel type="text" class="md:col-span-1"
            >Електронна пошта або логін:</UiInputLabel
          >
          <UiInputLabel type="password" class="md:col-span-1"
            >Пароль:</UiInputLabel
          >
        </div>
        <div class="mt-[12px] grid grid-cols-1 lg:grid-cols-2 gap-[12px]">
          <UiCheckbox>Запам’ятати мене</UiCheckbox>
          <UiTextPrimary> Вже зареєстровані? </UiTextPrimary>
        </div>
        <UiButtonPrimary
          class="!rounded-[5px] mt-[15px] md:mt-[30px] lg:mt-[40px] w-full"
          >Зареєструватися</UiButtonPrimary
        >
        <UiButtonGoogle class="w-full mt-[9px] lg:mt-[15px]"
          >Увійти з Google</UiButtonGoogle
        >
        <div class="flex items-center justify-center mt-[12px] lg:mt-[25px]">
          <UiTextPrimary> Ще не зареєстровані? </UiTextPrimary>
          <UiButtonText type="button" @click="router.push('/register')"
            >Зареєструватися</UiButtonText
          >
        </div>
      </form>
    </div>
  </LayoutAuth>
</template>

<style scoped></style>
