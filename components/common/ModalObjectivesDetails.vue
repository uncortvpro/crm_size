<script setup lang="ts">
const props = defineProps<{
  objective: Objective;
}>();

</script>

<template>
  <UiModalTitleClose :ui="{ width: '!max-w-[730px]' }" label="Деталі завдання">
    <div
      class="bg-beige rounded-[3px] mt-[15px] md:mt-[20px] px-[10px] md:px-[0px]"
    >
      <CommonModalObjectivesDetailsItem>
        <template #header> Заголовок: </template>
        <template #content> {{ objective?.headline }} </template>
      </CommonModalObjectivesDetailsItem>
      <CommonModalObjectivesDetailsItem>
        <template #header> Опис завдання: </template>
        <template #content> {{ objective?.description }} </template>
      </CommonModalObjectivesDetailsItem>
      <CommonModalObjectivesDetailsItem>
        <template #header> Відповідальний: </template>
        <template #content> {{ objective?.responsible }} </template>
      </CommonModalObjectivesDetailsItem>
      <CommonModalObjectivesDetailsItem>
        <template #header> Дедлайн: </template>
        <template #content> {{ useDate(objective?.deadline) }} </template>
      </CommonModalObjectivesDetailsItem>
      <CommonModalObjectivesDetailsItem>
        <template #header> Створив: </template>
        <template #content>{{ objective?.creator }} </template>
      </CommonModalObjectivesDetailsItem>
      <CommonModalObjectivesDetailsItem v-if="objective.participants">
        <template #header> Учасники: </template>
        <template #content>
          <span v-for="item in objective.participants">{{ item + ", " }}</span>
        </template>
      </CommonModalObjectivesDetailsItem>
      <CommonModalObjectivesDetailsItem>
        <template #header> Статус: </template>
        <template #content>
          <CommonStatusOutput :color="objective.status.colour">{{
            objective.status.status
          }}</CommonStatusOutput>
        </template>
      </CommonModalObjectivesDetailsItem>
      <CommonModalObjectivesDetailsItem class="border-none">
        <template #header> Коментар: </template>
        <template #content>{{ objective?.comment }}</template>
      </CommonModalObjectivesDetailsItem>
    </div>
  </UiModalTitleClose>
</template>

<style scoped></style>
