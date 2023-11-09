<script setup lang="ts">
const clientStore = useClientsStore();

const route = useRoute();
const clientId = computed(() => route.params.client_id);
const inputs = ref<Client>({} as Client);
const client = ref<Client>({} as Client);
const formData = ref();
const error = ref("");
const messageToUser = ref("");
const pageShoppingHistory = ref(1);
const endPageShoppingHistory = ref(1);
const sorting = ref<SortingShoppingHistory>("");
const reverseSorting = ref<boolean>(false);

const setSorting = (value: SortingShoppingHistory) => {
  useSorting(value, reverseSorting, sorting, getClient)
};

const setPageShoppingHistory = (page: number) => {
  pageShoppingHistory.value = page;
};

watch(
  pageShoppingHistory,
  () => {
    getClient();
  },
  { deep: true }
);

const handlerChange = (value: any, type: keyof Client) => {
  inputs.value[type] = value;
};

const updateInputs = () => {
  const token = localStorage.getItem("token");

  const data = new FormData();
  data.append("additional_phone", inputs.value.additional_phone);
  data.append("email", inputs.value.email);
  data.append("gender", inputs.value.gender);
  data.append("birthday", useFormatDate(inputs.value.birthday));
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
  }).then((res) => {
    if (res.message === "Client updated successfully") {
      messageToUser.value = "Клієнт успішно оновився!";
    } else {
      error.value = "Щось не вийшло!";
    }
  });
};

const getClient = () => {
  useAuthFetch(`${useApiUrl()}/client_info`, {
    body: {
      client_id: clientId.value,
      page: pageShoppingHistory.value,
      per_page: 5,
      sort_by: sorting.value,
      reverse_sort: reverseSorting.value,
    },
  }).then((res) => {
    console.log(res);
    endPageShoppingHistory.value = res.total_pages;
    client.value = res.client_info;
    inputs.value.additional_phone = res.client_info.additional_phone;
    inputs.value.birthday = res.client_info.birthday;
    inputs.value.comment = res.client_info.comment;
    inputs.value.email = res.client_info.email;
    inputs.value.gender = res.client_info.gender;
    inputs.value.instagram = res.client_info.instagram;
    inputs.value.name = res.client_info.name;
    inputs.value.phone = res.client_info.phone;
    inputs.value.status = res.client_info.status.status;
    inputs.value.telegram = res.client_info.telegram;
    inputs.value.userpic = res.client_info.userpic;
  });
};

const switchModalRemoveClient = (value: boolean) => {
  isModalRemoveClient.value = value;
};

const deleteClient = (id: string) => {
  switchModalRemoveClient(true);
};

const isModalRemoveClient = ref(false);

getClient();
</script>

<template>
  <LayoutProfilePage title="Редагувати клієнта">
    <template #header>
      <div class="items-center gap-[40px] hidden lg:flex">
        <UiButtonOpacityBorder @click="editClient">
          Оновити
        </UiButtonOpacityBorder>
        <UiButtonIcon @click="deleteClient" :value="'Видалити'" class="w-fit">
          <SvgoDelete class="-order-10"></SvgoDelete>
        </UiButtonIcon>
      </div>
    </template>
    <template #content>
      <CommonRemoveClient
        v-model="isModalRemoveClient"
        :clientId="client._id"
        @switchModal="switchModalRemoveClient"
      ></CommonRemoveClient>
      <UiAlertDanger v-if="error">{{ error }}</UiAlertDanger>
      <UiAlertSuccess v-if="messageToUser">{{ messageToUser }}</UiAlertSuccess>
      <LayoutClient
        :labelStatus="'Змінити статус клієнта:'"
        :inputs="inputs"
        @updateInputs="handlerChange"
      >
      </LayoutClient>
      <CommonClientShoppingHistory
        :shoppingHistoryItems="client.orders"
        :emailClient="client.email"
        :page="pageShoppingHistory"
        :endPage="endPageShoppingHistory"
        :sorting="sorting"
        :reverseSorting="reverseSorting"
        @setSorting="setSorting"
        @setPage="setPageShoppingHistory"
        class="mt-[25px] xl:mt-[40px]"
      ></CommonClientShoppingHistory>
      <div class="flex flex-col items-center lg:hidden mt-[25px]">
        <UiButtonOpacityBorder disabled> Оновити </UiButtonOpacityBorder>
        <UiButtonIcon
          @click="deleteClient"
          :value="'Видалити'"
          class="w-fit mt-[17px]"
        >
          <SvgoDelete class="-order-10"></SvgoDelete>
        </UiButtonIcon>
      </div>
    </template>
  </LayoutProfilePage>
</template>

<style scoped></style>
