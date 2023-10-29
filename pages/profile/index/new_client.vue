<script setup lang="ts">
const inputs = ref<Client>({} as Client);
const fromData = ref();

// const updateInputs = () => {
//   const token = localStorage.getItem("token");

//   const formData = new FormData();
//   formData.append("additional_phone", inputs.value.secondPhone);
//   formData.append("email", inputs.value.email);
//   formData.append("gender", inputs.value.gender);
//   formData.append("birthday", inputs.value.dateBirth);
//   formData.append("instagram", inputs.value.instagram);
//   formData.append("telegram", inputs.value.telegram);
//   formData.append("comment", inputs.value.comment);
//   formData.append("status", inputs.value.status);
//   formData.append("userpic", inputs.value.photo);
//   formData.append("phone", inputs.value.phone);
//   formData.append("name", inputs.value.name);
//   formData.append("access_token", token || "");

//   fromData.value = formData;
// };

const handlerChange = (value: Client) => {
  inputs.value = value;
};

const createClient = () => {
  // updateInputs();
  useAuthFetch(`${useApiUrl()}/add_client`, {
    body: {
      additional_phone: inputs.value.secondPhone,
      email: inputs.value.email,
      gender: inputs.value.gender,
      birthday: inputs.value.dateBirth,
      instagram: inputs.value.instagram,
      telegram: inputs.value.telegram,
      comment: inputs.value.comment,
      status: inputs.value.status,
      userpic: inputs.value.photo,
      phone: inputs.value.phone,
      name: inputs.value.name,
    },
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
      <LayoutClient
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
