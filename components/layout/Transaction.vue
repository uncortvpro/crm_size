<script setup lang="ts">
defineProps<{
  error: string;
  messageToUser: string;
  inputs: any;
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
        <UiHeader2 class="col-span-2"> Інформація </UiHeader2>
        <UiDivGridForm class="!grid-cols-none col-span-2 md:col-span-1">
          <UiLabelProfile
            class="col-span-2 md:col-span-1"
            label="Оберіть касу:"
          >
            <UiSelectProfile :options="['Каса безготівкова']"></UiSelectProfile>
          </UiLabelProfile>
        </UiDivGridForm>
        <UiLabelProfile
          class="row-span-2 col-span-2 md:col-span-1"
          label="Введіть суму транзакції:"
        >
          <UiInputProfile></UiInputProfile>
        </UiLabelProfile>
        <UiLabelProfile
          class="row-span-2 col-span-2 md:col-span-1"
          label="Оберіть контрагента:"
        >
          <UiSelectProfile :options="['Кузьменко А.']"></UiSelectProfile>
        </UiLabelProfile>
        <UiHeader2 class="col-span-2 mt-[30px] xl:mt-[55px]">
          Додаткова інформація
        </UiHeader2>
        <UiLabelProfile
          class="col-span-2 md:col-span-1"
          label="Дата транзакції:"
        >
          <UiDatePicker></UiDatePicker>
        </UiLabelProfile>
        <UiLabelProfile class="col-span-2 md:col-span-1" label="Категорія:">
          <UiSelectProfile :options="['Замовлення']"></UiSelectProfile>
        </UiLabelProfile>
        <UiLabelProfile label="Коментар:" class="col-span-2 md:col-span-1">
          <UiTextareaProfile
            class="min-h-[80px] xl:min-h-[105px]"
          ></UiTextareaProfile>
        </UiLabelProfile>
      </UiDivGridForm>
    </UiDivBorderBg>
  </form>
</template>

<style scoped></style>
