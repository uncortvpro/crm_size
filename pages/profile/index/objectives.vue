<script setup lang="ts">
const objectivesStore = useObjectivesStore();

const objectives = computed(() => objectivesStore.objectives);
const fetchObjectives = () => objectivesStore.fetchObjectives();
const searchObjectives = (keyword: string) =>
  objectivesStore.searchObjectives(keyword);

const isObjectivesDetails = ref(false);
const currentObjectiveId = ref("");
const currentObjective = computed(() =>
  objectives.value.find(
    (objective) => objective._id === currentObjectiveId.value
  )
);

const sorting = computed(() => objectivesStore.sorting);
const reverseSorting = computed(() => objectivesStore.reverseSorting);
const setSorting = (sorting: SortingObjective) => {
  objectivesStore.setSorting(sorting);
};

const page = computed(() => objectivesStore.page);
const endPage = computed(() => objectivesStore.endPage);
const setPage = (page: number) => objectivesStore.setPage(page);
const deleteObjectives = async () => {
  objectivesStore.deleteObjectives(currentObjectiveId.value);
  switchModalRemove(false);
};
const isModalRemove = ref(false);

const deleteAction = (id: string) => {
  switchObjectiveId(id);
  switchModalRemove(true);
};

const switchModalRemove = (value: boolean) => {
  isModalRemove.value = value;
};

const switchObjectiveId = (id: string) => {
  currentObjectiveId.value = id;
};

const showObjectivesDetails = (id: string) => {
  switchObjectiveId(id);
  isObjectivesDetails.value = true;
};

fetchObjectives();
</script>

<template>
  <LayoutProfilePage title="Задачі">
    <template #content>
      <CommonNavigationPage
        @search="searchObjectives"
        @add="navigateTo('new_objectives')"
      >
        <template #add_name> Додати завдання</template>
      </CommonNavigationPage>

      <UiModalWarning
        v-if="currentObjective"
        v-model="isModalRemove"
        @closeModal="switchModalRemove(false)"
        @confirm="deleteObjectives"
        >Ви впевнені, що хочете видалити завдання?</UiModalWarning
      >

      <CommonModalObjectivesDetails
        v-if="currentObjective"
        v-model="isObjectivesDetails"
        :objective="currentObjective"
      ></CommonModalObjectivesDetails>
      <CommonTable :pageTable="page" :endPage="endPage" @setPage="setPage">
        <template #headers>
          <UiTableCellHeader>
            <CommonButtonSortingTable
              :sortingUp="sorting === 'date' && reverseSorting"
              :sortingDown="sorting === 'date' && !reverseSorting"
              @click="setSorting('date')"
              class="!font-normal"
            >
              Дата</CommonButtonSortingTable
            >
          </UiTableCellHeader>
          <UiTableCellHeader>Завдання</UiTableCellHeader>
          <UiTableCellHeader>Відповідальний</UiTableCellHeader>
          <UiTableCellHeader>
            <CommonButtonSortingTable
              :sortingUp="sorting === 'deadline' && reverseSorting"
              :sortingDown="sorting === 'deadline' && !reverseSorting"
              @click="setSorting('deadline')"
              class="!font-normal"
            >
            Дедлайн</CommonButtonSortingTable
            >
            </UiTableCellHeader>
          <UiTableCellHeader>Створив</UiTableCellHeader>
          <UiTableCellHeader>Учасники</UiTableCellHeader>
          <UiTableCellHeader>Статус</UiTableCellHeader>
          <UiTableCellHeader>Коментар</UiTableCellHeader>
        </template>
        <template #items>
          <CommonTableItemObjectives
            v-for="objective in objectives"
            :key="objective._id"
            :objective="objective"
            @showDetails="showObjectivesDetails"
            @deleteAction="deleteAction(objective._id)"
          ></CommonTableItemObjectives>
        </template>
      </CommonTable>
    </template>
  </LayoutProfilePage>
</template>

<style scoped></style>
