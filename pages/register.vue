<script setup lang="ts">
const router = useRouter();
definePageMeta({
  layout: "without-header-footer",
});
</script>

<template>
  <LayoutAuth maxWidth="715px">
    <div
      class="rounded-[5px] bg-white max-w-[715px] w-full shadow-auth-shadow mx-[15px] my-[50px] shadow-gray-300 pt-[35px] px-[20px] pb-[15px] lg:pt-[55px] lg:px-[40px] lg:pb-[30px]"
    >
      <form action="#">
        <h5
          class="font-semibold uppercase text-[18px] text-center md:text-[24px] lg:text-[28px] xl:text-[30px]"
        >
          РЕЄСТРАЦІЯ
        </h5>
        <UiButtonGoogle class="w-full mt-[20px] lg:mt-[30px] xl:mt-[40px]"
          >Зареєструватися через Google</UiButtonGoogle
        >
        <p class="text-center text-[9px] lg:text-[15px] mt-[12px] lg:mt-[20px]">
          або
        </p>
        <div
          class="mt-[12px] lg:mt-[20px] gap-y-[12px] md:gap-y-[20px] md:gap-x-[20px] grid"
        >
          <UiInputLabel type="text" class="md:col-span-1"
            >Введіть повне ім’я:</UiInputLabel
          >
          <UiInputLabel type="number" class="md:col-span-1"
            >Введіть номер телефону:</UiInputLabel
          >
          <UiInputLabel type="text" class="md:col-span-2"
            >Введіть email:</UiInputLabel
          >
          <UiInputLabel type="text" class="md:col-span-1"
            >Введіть пароль:</UiInputLabel
          >
          <UiInputLabel type="text" class="md:col-span-1"
            >Повторіть пароль:</UiInputLabel
          >
        </div>
        <div class="mt-[12px] grid grid-cols-1 lg:grid-cols-2 gap-[12px]">
          <UiCheckbox
            >Ви приймаєте
            <span class="font-semibold">умови використання</span></UiCheckbox
          >
          <UiCheckbox
            >Я хочу отримувати листи на email з новинами та спеціальними
            пропозиціями</UiCheckbox
          >
        </div>
        <UiButtonPrimary
          class="!rounded-[5px] mt-[15px] md:mt-[30px] lg:mt-[40px] w-full"
          >Зареєструватися</UiButtonPrimary
        >
        <div class="flex items-center justify-center mt-[12px] lg:mt-[25px]">
          <UiTextPrimary> Вже зареєстровані? </UiTextPrimary>
          <UiButtonText type="button" @click="router.push('/authorize')">Увійти</UiButtonText>
        </div>
      </form>
    </div>
  </LayoutAuth>
</template>

<style scoped></style>
