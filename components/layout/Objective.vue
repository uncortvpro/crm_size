<script setup lang="ts">
defineProps<{
  error: string;
  messageToUser: string;
  inputs: Objective;
  labelStatus: string;
}>();

const emits = defineEmits(["updateInputs"]);

const handlerChange = (value: any, type: keyof Objective) => {
  emits("updateInputs", value, type);
};
</script>

<template>
  <UiAlertDanger v-if="error">{{ error }}</UiAlertDanger>
  <UiAlertSuccess v-if="messageToUser">{{ messageToUser }}</UiAlertSuccess>
  <form action="#">
    <UiDivBorderBg class="w-full max-w-[1008px]">
      <UiDivGridForm>
        <UiHeader2 class="col-span-2"> Інформація про завдання </UiHeader2>
        <UiDivGridForm class="!grid-cols-none col-span-2 md:col-span-1">
          <UiLabelProfile class="col-span-2 md:col-span-1" label="Заголовок:">
            <UiInputProfile v-model="inputs.headline"></UiInputProfile>
          </UiLabelProfile>
          <UiLabelProfile label="Додайте учасників:">
            <CommonParticipantAdding
              :addedParticipants="inputs.participants"
              type="participants"
              @updateParticipants="handlerChange"
            ></CommonParticipantAdding>
          </UiLabelProfile>
        </UiDivGridForm>
        <UiLabelProfile
          class="row-span-2 col-span-2 md:col-span-1"
          label="Опис завдання:"
        >
          <UiTextareaProfile
            v-model="inputs.description"
            class="min-h-[80px] md:min-h-[120px] xl:min-h-[270px]"
          ></UiTextareaProfile>
        </UiLabelProfile>
        <UiHeader2 class="col-span-2"> Додаткова інформація </UiHeader2>
        <UiLabelProfile
          class="col-span-2 md:col-span-1"
          label="Відповідальна особа:"
        >
          <UiInputProfile v-model="inputs.responsible"></UiInputProfile>
        </UiLabelProfile>
        <UiLabelProfile class="col-span-2 md:col-span-1" label="Дедлайн:">
          <UiDatePicker
            v-model="inputs.deadline"
            :valueData="inputs.deadline"
          ></UiDatePicker>
        </UiLabelProfile>
        <UiLabelProfile class="col-span-2 md:col-span-1" :label="labelStatus">
          <CommonSelectVariant
            :valueSelect="inputs.status"
            typeSelect="status"
            typeVariant="task"
            @updateValue="handlerChange"
          ></CommonSelectVariant>
        </UiLabelProfile>
        <UiLabelProfile class="col-span-2 md:col-span-1" label="Коментар:">
          <UiTextareaProfile
            v-model="inputs.comment"
            class="min-h-[80px] md:min-h-[120px]"
          ></UiTextareaProfile>
        </UiLabelProfile>
      </UiDivGridForm>
    </UiDivBorderBg>
  </form>
</template>

<style scoped></style>
