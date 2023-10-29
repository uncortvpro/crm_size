<script setup lang="ts">
const inputs = ref<Client>({} as Client);
const formData = ref();
const auth = useAuthStore();
const error = ref("");
const messageToUser = ref("");
const failedToken = () => auth.failedToken();

const updateInputs = () => {
  const token = localStorage.getItem("token");

  const data = new FormData();
  data.append("additional_phone", inputs.value.secondPhone);
  data.append("email", inputs.value.email);
  data.append("gender", inputs.value.gender);
  data.append("birthday", inputs.value.dateBirth);
  data.append("instagram", inputs.value.instagram);
  data.append("telegram", inputs.value.telegram);
  data.append("comment", inputs.value.comment);
  data.append("status", inputs.value.status);
  data.append("userpic", inputs.value.photo);
  data.append("phone", inputs.value.phone);
  data.append("name", inputs.value.name);
  data.append("access_token", token || "");

  formData.value = data;
};

const handlerChange = (value: Client) => {
  inputs.value = value;
};

const validateResponse = (message: string) => {
  if (message === "Client already exists") {
    error.value = "Клієнт вже існує";
    return false;
  }
  if (message === "Client created successfully") {
    messageToUser.value = "Клієнта успішно створено";
    inputs.value = {} as Client;
    return false;
  }
};

const createClient = () => {
  const token = localStorage.getItem("token");
  updateInputs();

  useApiFetch(`${useApiUrl()}/add_client`, {
    method: "POST",
    body: formData.value,
  })
    .then((res: any) => {
      validateResponse(res.message);
    })
    .catch((res) => {
      console.log(res);
    });
};
</script>

<template>
  <LayoutProfilePage title="Додати клієнта">
    <template #header>
      <UiButtonOpacityBorder @click="createClient" class="hidden lg:block">
        Створити
      </UiButtonOpacityBorder>
    </template>
    <template #content>
      <UiAlertDanger v-if="error">{{ error }}</UiAlertDanger>
      <UiAlertSuccess v-if="messageToUser">{{ messageToUser }}</UiAlertSuccess>
      <LayoutClient
        :inputs="inputs"
        :labelStatus="'Статус клієнта:'"
        @updateInputs="handlerChange"
      >
      </LayoutClient>
      <div class="flex justify-center">
        <UiButtonOpacityBorder disabled class="lg:hidden">
          Створити
        </UiButtonOpacityBorder>
      </div>
    </template>
  </LayoutProfilePage>
</template>

<style scoped></style>
