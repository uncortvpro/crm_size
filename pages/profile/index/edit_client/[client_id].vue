<script setup lang="ts">
const isOpen = ref(false);
const switchOpen = (value: boolean) => {
  isOpen.value = value;
};
//
const route = useRoute();
const clientId = computed(() => route.params.client_id);
const inputs = ref<Client>({} as Client);
const formData = ref();
const handlerChange = (value: Client, type: keyof Client) => {
  inputs.value[type] = value;
};

const updateInputs = () => {
  const token = localStorage.getItem("token");

  const data = new FormData();
  data.append("additional_phone", inputs.value.additional_phone);
  data.append("email", inputs.value.email);
  data.append("gender", inputs.value.gender);
  data.append("birthday", useDateToString(inputs.value.birthday));
  data.append("instagram", inputs.value.instagram);
  data.append("telegram", inputs.value.telegram);
  data.append("comment", inputs.value.comment);
  data.append("status", inputs.value.status);
  data.append("userpic", inputs.value.userpic);
  data.append("phone", inputs.value.phone);
  data.append("name", inputs.value.name);
  data.append("access_token", token || "");

  formData.value = data;
};

const editClient = () => {
  updateInputs();

  useApiFetch(`${useApiUrl()}/update_client/${clientId.value}`, {
    method: "POST",
    body: formData.value,
  });
};

// watch(
//   () => inputs.value,
//   () => {
//     console.log(inputs.value);
//   },
//   { deep: true }
// );

const getClient = () => {
  useAuthFetch(`${useApiUrl()}/client_info`, {
    body: {
      client_id: clientId.value,
    },
  }).then((res) => {
    inputs.value.additional_phone = res.additional_phone;
    inputs.value.birthday = res.birthday;
    inputs.value.comment = res.comment;
    inputs.value.email = res.email;
    inputs.value.gender = res.gender;
    inputs.value.instagram = res.instagram;
    inputs.value.name = res.name;
    inputs.value.phone = res.phone;
    inputs.value.status = res.status;
    inputs.value.telegram = res.telegram;
    inputs.value.userpic = res.userpic;
  });
};

getClient();
</script>

<template>
  <LayoutProfilePage title="Редагувати клієнта">
    <template #header>
      <div class="items-center gap-[40px] hidden lg:flex">
        <UiButtonOpacityBorder @click="editClient">
          Оновити
        </UiButtonOpacityBorder>
        <UiButtonIcon
          @click="isOpen = !isOpen"
          :value="'Видалити'"
          class="w-fit"
        >
          <SvgoDelete class="-order-10"></SvgoDelete>
        </UiButtonIcon>
      </div>
    </template>
    <template #content>
      <LayoutClient
        :labelStatus="'Змінити статус клієнта:'"
        :inputs="inputs"
        @updateInputs="handlerChange"
      >
      </LayoutClient>
      <CommonModalOrderDetails
        v-model="isOpen"
        label="Деталі замовлення"
        @closeModal="switchOpen"
      ></CommonModalOrderDetails>
      <div class="mt-[25px] xl:mt-[40px]">
        <UiHeader2>Історія покупок</UiHeader2>
        <CommonTable>
          <template #headers>
            <UiTableCellHeader>Дата покупки</UiTableCellHeader>
            <UiTableCellHeader>Номер замовлення</UiTableCellHeader>
            <UiTableCellHeader>Сума замовлення</UiTableCellHeader>
            <UiTableCellHeader>Товари</UiTableCellHeader>
            <UiTableCellHeader>Оплата</UiTableCellHeader>
            <UiTableCellHeader>Статус замовлення</UiTableCellHeader>
          </template>
          <template #items>
            <CommonTableItemShoppingHistory></CommonTableItemShoppingHistory>
            <CommonTableItemShoppingHistory></CommonTableItemShoppingHistory>
            <CommonTableItemShoppingHistory></CommonTableItemShoppingHistory>
            <CommonTableItemShoppingHistory></CommonTableItemShoppingHistory>
            <CommonTableItemShoppingHistory></CommonTableItemShoppingHistory>
            <CommonTableItemShoppingHistory></CommonTableItemShoppingHistory>
          </template>
        </CommonTable>
      </div>
      <div class="flex flex-col items-center lg:hidden mt-[25px]">
        <UiButtonOpacityBorder disabled> Оновити </UiButtonOpacityBorder>
        <UiButtonIcon :value="'Видалити'" class="w-fit mt-[17px]">
          <SvgoDelete class="-order-10"></SvgoDelete>
        </UiButtonIcon>
      </div>
    </template>
  </LayoutProfilePage>
</template>

<style scoped></style>
