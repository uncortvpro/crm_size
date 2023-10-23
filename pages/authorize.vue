<script setup lang="ts">
const router = useRouter();
const auth = useAuthStore();
definePageMeta({
  layout: "without-header-footer",
});
const successAuth = (token: string) => auth.successAuth(token);
const credentials = reactive<LoginCredentials>({
  login: "",
  password: "",
});
const error = ref("");

const changeCredentials = (type: keyof LoginCredentials, value: string) => {
  credentials[type] = value;
};

const login = () => {
  auth
    .login(credentials)
    .then((res: any) => {
      if (!res.access_token) {
        error.value = "Користувач не існує";
      }
      successAuth(res.access_token);
      router.push("/profile");
    })
    .catch((err) => {
      error.value = "Користувач не існує";
    });
};
</script>

<template>
  <LayoutAuth>
    <div
      class="rounded-[5px] bg-white max-w-[560px] w-full shadow-auth-shadow mx-[15px] my-[50px] shadow-gray-300 pt-[35px] px-[20px] pb-[15px] lg:pt-[55px] lg:px-[40px] lg:pb-[30px]"
    >
      <form action="#" @submit.prevent="login">
        <h5
          class="font-semibold uppercase text-[18px] text-center md:text-[24px] lg:text-[28px] xl:text-[30px]"
        >
          АВТОРИЗАЦІЯ
        </h5>
        <div
          class="mt-[12px] lg:mt-[20px] gap-y-[12px] md:gap-y-[20px] md:gap-x-[20px] grid"
        >
          <UiInputLabel
            inputType="login"
            @changeValue="changeCredentials"
            type="text"
            class="md:col-span-1"
            >Електронна пошта або логін:</UiInputLabel
          >
          <UiInputLabel
            inputType="password"
            @changeValue="changeCredentials"
            type="password"
            class="md:col-span-1"
            >Пароль:</UiInputLabel
          >
        </div>
        <div class="mt-[12px] grid items-center grid-cols-2 gap-[12px]">
          <UiCheckbox>Запам’ятати мене</UiCheckbox>
          <UiButtonText type="button" class="text-right !font-normal">
            Забули пароль?
          </UiButtonText>
        </div>
        <UiTextPrimary class="!text-red-600 mt-[15px]" v-if="error">{{
          error
        }}</UiTextPrimary>
        <UiButtonPrimary
          class="!rounded-[5px] mt-[15px] md:mt-[30px] lg:mt-[40px] w-full"
          >Увійти</UiButtonPrimary
        >
        <UiButtonGoogle type="button" class="w-full mt-[9px] lg:mt-[15px]"
          >Увійти з Google</UiButtonGoogle
        >
        <div class="flex gap-[7px] items-center justify-center mt-[12px] lg:mt-[25px]">
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
