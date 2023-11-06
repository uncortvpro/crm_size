<script setup lang="ts">
const clientsStore = useClientsStore();
const isModalRemoveClient = ref(false);
const currentClientId = ref<string>("");
const clients = computed(() => clientsStore.clients);
const pageClients = computed(() => clientsStore.page);
const endPage = computed(() => clientsStore.endPage);

const getClients = () => clientsStore.fetchClients();
const setPage = (page: number) => clientsStore.setPage(page);
const searchClients = (keyWord: string) => clientsStore.searchClients(keyWord);

const switchModalRemoveClient = (value: boolean) => {
  isModalRemoveClient.value = value;
};
const changeCurrentClientId = (id: string) => {
  currentClientId.value = id;
};

const deleteClient = (id: string) => {
  changeCurrentClientId(id);
  switchModalRemoveClient(true);
};

getClients();
</script>

<template>
  <LayoutProfilePage title="Клієнти">
    <template #content>
      <div class="mt-[15px] xl:mt-[25px]">
        <CommonRemoveClient
          v-model="isModalRemoveClient"
          :clientId="currentClientId"
          @switchModal="switchModalRemoveClient"
        ></CommonRemoveClient>
        <div class="flex justify-between gap-[15px] items-center">
          <UiButtonOpacityBorderAddItem
            @click="navigateTo('new_client')"
            class="flex-shrink-0"
            >Додати клієнта</UiButtonOpacityBorderAddItem
          >
          <CommonSearchBorder @search="searchClients" />
        </div>
        <CommonTable
          :pageTable="pageClients"
          :endPage="endPage"
          @setPage="setPage"
        >
          <template #headers>
            <UiTableCellHeader>Ім’я</UiTableCellHeader>
            <UiTableCellHeader>Номер телефону</UiTableCellHeader>
            <UiTableCellHeader>Email</UiTableCellHeader>
            <UiTableCellHeader>Instagram</UiTableCellHeader>
            <UiTableCellHeader>Історія покупок </UiTableCellHeader>
            <UiTableCellHeader>Тотал сума покупок</UiTableCellHeader>
            <UiTableCellHeader>
              <UiButtonTextArrowTop class="!font-normal"
                >Дата останньої покупки</UiButtonTextArrowTop
              >
            </UiTableCellHeader>
            <UiTableCellHeader>Статус</UiTableCellHeader>
          </template>
          <template #items>
            <CommonTableItemClients
              v-for="client in clients"
              :key="client._id.$oid"
              :client="client"
              @deleteAction="deleteClient(client._id.$oid)"
            ></CommonTableItemClients>
          </template>
        </CommonTable>
      </div>
    </template>
  </LayoutProfilePage>
</template>

<style scoped></style>
