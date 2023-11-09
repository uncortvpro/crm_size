<script setup lang="ts">
const objectivesStore = useObjectivesStore();

const objectives = computed(() => objectivesStore.objectives);
const fetchObjectives = () => objectivesStore.fetchObjectives();

const isObjectivesDetails = ref(false);
const currentObjectiveId = ref("");
const currentObjective = computed(() =>
  objectives.value.find(
    (objective) => objective._id === currentObjectiveId.value
  )
);

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
      <CommonNavigationPage @add="navigateTo('new_objectives')">
        <template #add_name> Додати завдання</template>
      </CommonNavigationPage>

      <CommonModalObjectivesDetails
        v-if="currentObjective"
        v-model="isObjectivesDetails"
        :objective="currentObjective"
      ></CommonModalObjectivesDetails>
      <CommonTable>
        <template #headers>
          <UiTableCellHeader>Дата</UiTableCellHeader>
          <UiTableCellHeader>Завдання</UiTableCellHeader>
          <UiTableCellHeader>Відповідальний</UiTableCellHeader>
          <UiTableCellHeader>Дедлайн</UiTableCellHeader>
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
          ></CommonTableItemObjectives>
        </template>
      </CommonTable>
    </template>
  </LayoutProfilePage>
</template>

<style scoped></style>
