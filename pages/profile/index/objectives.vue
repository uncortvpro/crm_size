<script setup lang="ts"></script>

<template>
  <LayoutProfilePage title="Задачі">
    <template #content>
      <CommonNavigationPage @add="navigateTo('new_objectives')">
        <template #add_name> Додати завдання</template>
      </CommonNavigationPage>

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
            v-for="client in [1, 2, 3, 4, 5, 6]"
          ></CommonTableItemObjectives>
        </template>
      </CommonTable>
    </template>
  </LayoutProfilePage>
</template>

<style scoped></style>
