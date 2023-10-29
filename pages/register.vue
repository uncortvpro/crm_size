<script setup lang="ts">
const router = useRouter();
const auth = useAuthStore();
definePageMeta({
  layout: "without-header-footer",
});

const credentials = reactive<RegisterCredentials>({
  name: "",
  telephone: "",
  email: "",
  password: "",
  cPassword: "",
});
const error = ref("");
const message = ref("");

const changeCredentials = (type: keyof RegisterCredentials, value: string) => {
  credentials[type] = value;
};

const validate = () => {
  const valid = usePasswordValidation(
    credentials.password,
    credentials.cPassword
  );
  if (!valid) {
    error.value = "";
    return true;
  }
  error.value = valid;
  return false;
};

const onRegistration = () => {
  if (!validate()) {
    return false;
  }
  auth
    .register(credentials)
    .then((res: any) => {
      if ((res.message = "User created successfully")) {
        message.value = "Користувача успішно створено.";
      } else {
        error.value = "Не вдалося створити користувача. Спробуйте ще раз.";
      }
    })
    .catch((err) => {
      error.value = "Не вдалося створити користувача. Спробуйте ще раз.";
    });
};
</script>

<template>
  <LayoutAuth maxWidth="715px">
    <div
      class="rounded-[5px] bg-white max-w-[715px] w-full shadow-auth-shadow mx-[15px] my-[50px] shadow-gray-300 pt-[35px] px-[20px] pb-[15px] lg:pt-[55px] lg:px-[40px] lg:pb-[30px]"
    >
      <form action="#" @submit.prevent="onRegistration">
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
          <UiInputLabel
            inputType="name"
            @changeValue="changeCredentials"
            type="text"
            class="md:col-span-1"
            >Введіть повне ім’я:</UiInputLabel
          >
          <UiInputLabel
            inputType="telephone"
            @changeValue="changeCredentials"
            type="number"
            class="md:col-span-1"
            >Введіть номер телефону:</UiInputLabel
          >
          <UiInputLabel
            inputType="email"
            @changeValue="changeCredentials"
            type="text"
            class="md:col-span-2"
            >Введіть email:</UiInputLabel
          >
          <UiInputLabel
            inputType="password"
            @changeValue="changeCredentials"
            type="password"
            class="md:col-span-1"
            >Введіть пароль:</UiInputLabel
          >
          <UiInputLabel
            inputType="cPassword"
            @changeValue="changeCredentials"
            type="password"
            class="md:col-span-1"
            >Повторіть пароль:</UiInputLabel
          >
        </div>
        <div class="mt-[12px] grid grid-cols-1 lg:grid-cols-2 gap-[12px]">
          <UiCheckbox :required="true"
            >Ви приймаєте
            <span class="font-semibold">умови використання</span></UiCheckbox
          >
          <UiCheckbox :required="true"
            >Я хочу отримувати листи на email з новинами та спеціальними
            пропозиціями</UiCheckbox
          >
        </div>
        <AlertDanger v-if="error">{{ error }}</AlertDanger>
        <UiAlertSuccess v-if="message">{{ message }}</UiAlertSuccess>
        <UiButtonPrimary
          type="submit"
          class="!rounded-[5px] mt-[15px] md:mt-[30px] lg:mt-[40px] w-full"
          >Зареєструватися</UiButtonPrimary
        >
        <div
          class="flex gap-[7px] items-center justify-center mt-[12px] lg:mt-[25px]"
        >
          <UiTextPrimary> Вже зареєстровані? </UiTextPrimary>
          <UiButtonText type="button" @click="router.push('/authorize')"
            >Увійти</UiButtonText
          >
        </div>
      </form>
    </div>
  </LayoutAuth>
</template>

<style scoped></style>
