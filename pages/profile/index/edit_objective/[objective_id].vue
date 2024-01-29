<script setup lang="ts">
const objectivesStore = useObjectivesStore();
definePageMeta({
  middleware: ["only-finance"],
});

const route = useRoute();

const error = ref("");
const messageToUser = ref("");
const objectiveId = computed(() => route.params.objective_id);
const inputs = ref<any>({
  participants: [],
  headline: "",
  description: "",
  responsible: "",
  deadline: "",
  status: "",
  comment: "",
});

const handlerChangeInputs = (value: any, type: keyof Objective) => {
  inputs.value[type] = value;
};

const getObjective = () => {
  useAuthFetch(`${useApiUrl()}/task_info`, {
    body: {
      task_id: objectiveId.value,
    },
  }).then((res) => {
    inputs.value.participants = res.participants;
    inputs.value.headline = res.headline;
    inputs.value.description = res.description;
    inputs.value.responsible = res.responsible;
    inputs.value.deadline = res.deadline;
    inputs.value.status = res.status.status;
    inputs.value.comment = res.comment;
  });
};

const editObjective = () => {
  useAuthFetch(`${useApiUrl()}/update_task`, {
    body: {
      task_id: objectiveId.value,
      participants: inputs.value.participants,
      headline: inputs.value.headline,
      description: inputs.value.description,
      responsible: inputs.value.responsible,
      deadline: useFormatDate(inputs.value.deadline),
      status: inputs.value.status,
      comment: inputs.value.comment,
    },
  })
    .then((res) => {
      if (res.message === true) {
        messageToUser.value = "Завдання успішно оновлено!";
      } else {
        error.value = "Щось не вийшло!";
      }
    })
    .catch((err) => {
      error.value = "Щось не вийшло!";
    });
};

const isModalRemove = ref(false);
const switchModalRemove = (value: boolean) => {
  isModalRemove.value = value;
};

const deleteObjective = async () => {
  await objectivesStore.deleteObjectives(objectiveId.value as string);
  switchModalRemove(false);
  navigateTo('/profile/objectives');
}
getObjective();
</script>

<template>
  <LayoutProfilePage isButtonBack title="Редагувати завдання">
    <template #header>
      <div class="items-center gap-[40px] hidden lg:flex">
        <UiButtonOpacityBorder @click="editObjective" class="hidden lg:block">
          Оновити
        </UiButtonOpacityBorder>
        <UiButtonIcon @click="switchModalRemove(true)" :value="'Видалити'" class="w-fit">
          <SvgoDelete class="-order-10"></SvgoDelete>
        </UiButtonIcon>
      </div>
    </template>
    <template #content>
      <UiModalWarning
        v-model="isModalRemove"
        @closeModal="switchModalRemove(false)"
        @confirm="deleteObjective"
        >Ви впевнені, що хочете видалити завдання?</UiModalWarning
      >

      <LayoutObjective
        :inputs="inputs"
        :error="error"
        :messageToUser="messageToUser"
        labelStatus="Змінити статус завдання:"
        @updateInputs="handlerChangeInputs"
      ></LayoutObjective>
      <div
        class="flex flex-col items-center pb-[50px] gap-[20px] lg:hidden mt-[25px]"
      >
        <UiButtonOpacityBorder
          @click="editObjective"
          class="lg:hidden mt-[25px]"
        >
          Створити
        </UiButtonOpacityBorder>
        <UiButtonIcon @click="switchModalRemove(true)" :value="'Видалити'" class="w-fit">
          <SvgoDelete class="-order-10"></SvgoDelete>
        </UiButtonIcon>
      </div>
    </template>
  </LayoutProfilePage>
</template>

<style scoped></style>
