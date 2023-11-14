<script setup lang="ts">
const auth = useAuthStore();

const creator = computed(() => auth.user?.name);
const error = ref("");
const messageToUser = ref("");

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

const validateResponse = (message: any) => {
  if (message === true) {
    messageToUser.value = "Завдання успішно створено";
    inputs.value = {} as Client;
    return false;
  } else {
    error.value = "Щось не вийшло!";
  }
};

const createObjective = () => {
  useAuthFetch(`${useApiUrl()}/add_task`, {
    body: {
      creator: creator.value,
      headline: inputs.value.headline,
      description: inputs.value.description,
      participants: inputs.value.participants,
      responsible: inputs.value.responsible,
      deadline: useFormatDate(inputs.value.deadline),
      status: inputs.value.status,
      comment: inputs.value.comment,
    },
  })
    .then((res: any) => {
      validateResponse(res.message);
    })
    .catch((res) => {
      validateResponse(res);
      console.log(res);
    });
};
</script>

<template>
  <LayoutProfilePage title="Додати завдання">
    <template #header>
      <UiButtonOpacityBorder @click="createObjective" class="hidden lg:block">
        Створити
      </UiButtonOpacityBorder>
    </template>
    <template #content>
      <LayoutObjective
        :inputs="inputs"
        :error="error"
        :messageToUser="messageToUser"
        labelStatus="Статус завдання:"
        @updateInputs="handlerChangeInputs"
      ></LayoutObjective>
      <div class="flex justify-center">
        <UiButtonOpacityBorder
          @click="createObjective"
          class="lg:hidden mt-[25px]"
        >
          Створити
        </UiButtonOpacityBorder>
      </div>
    </template>
  </LayoutProfilePage>
</template>

<style scoped></style>
