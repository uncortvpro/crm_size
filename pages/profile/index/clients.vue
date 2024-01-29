<script setup lang="ts">
const clientsStore = useClientsStore();
const isModalRemoveClient = ref(false);
const currentClientId = ref<string>("");
const clients = computed(() => clientsStore.clients);
const pageClients = computed(() => clientsStore.page);
const endPage = computed(() => clientsStore.endPage);
definePageMeta({
  middleware: ["only-finance"],
});


const getClients = () => clientsStore.fetchClients();
const setPage = (page: number) => clientsStore.setPage(page);
const searchClients = (keyWord: string) => clientsStore.searchClients(keyWord);

const sorting = computed(() => clientsStore.sorting);
const reverseSorting = computed(() => clientsStore.reverseSorting);
const setSorting = (sorting: SortingClients) => {
  clientsStore.setSorting(sorting);
};

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
      <div>
        <CommonRemoveClient
          v-model="isModalRemoveClient"
          :clientId="currentClientId"
          @switchModal="switchModalRemoveClient"
        ></CommonRemoveClient>
        <CommonNavigationPage
          @add="navigateTo('new_client')"
          @search="searchClients"
        >
          <template #add_name> Додати клієнта </template>
        </CommonNavigationPage>
        <CommonTable
          :pageTable="pageClients"
          :endPage="endPage"
          @setPage="setPage"
        >
          <template #headers>
            <UiTableCellHeader>
              <CommonButtonSortingTable
                :sortingUp="sorting === 'name' && reverseSorting"
                :sortingDown="sorting === 'name' && !reverseSorting"
                @click="setSorting('name')"
                class="!font-normal"
              >
                Ім’я</CommonButtonSortingTable
              >
            </UiTableCellHeader>
            <UiTableCellHeader>Номер телефону</UiTableCellHeader>
            <UiTableCellHeader>Email</UiTableCellHeader>
            <UiTableCellHeader>Instagram</UiTableCellHeader>
            <UiTableCellHeader>Історія покупок </UiTableCellHeader>
            <UiTableCellHeader>
              <CommonButtonSortingTable
                :sortingUp="sorting === 'total_price_sum' && reverseSorting"
                :sortingDown="sorting === 'total_price_sum' && !reverseSorting"
                @click="setSorting('total_price_sum')"
                class="!font-normal"
              >
                Тотал сума покупок</CommonButtonSortingTable
              >
            </UiTableCellHeader>
            <UiTableCellHeader>
              <CommonButtonSortingTable
                :sortingUp="sorting === 'latest_order_date' && reverseSorting"
                :sortingDown="
                  sorting === 'latest_order_date' && !reverseSorting
                "
                @click="setSorting('latest_order_date')"
                class="!font-normal"
              >
                Дата останньої покупки</CommonButtonSortingTable
              >
            </UiTableCellHeader>
            <UiTableCellHeader>Статус</UiTableCellHeader>
          </template>
          <template #items>
            <CommonTableItemClients
              v-for="client in clients"
              :key="client._id"
              :client="client"
              @deleteAction="deleteClient(client._id)"
            ></CommonTableItemClients>
          </template>
        </CommonTable>
      </div>
    </template>
  </LayoutProfilePage>
</template>

<style scoped></style>
