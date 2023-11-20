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
            label="Назва товару:"
          >
            <UiInputProfile v-model="inputs.headline"></UiInputProfile>
          </UiLabelProfile>
        </UiDivGridForm>
        <UiLabelProfile
          class="row-span-2 col-span-2 md:col-span-1"
          label="Опис товару:"
        >
          <UiTextareaProfile
            v-model="inputs.description"
            class="min-h-[80px] md:min-h-[120px]"
          ></UiTextareaProfile>
        </UiLabelProfile>
        <UiHeader2 class="col-span-2"> Додаткова інформація </UiHeader2>
        <UiLabelProfile
          class="col-span-2 md:col-span-1"
          label="Обрати статус товару:"
        >
          <CommonSelectVariant
            :valueSelect="inputs.status"
            typeSelect="status"
            typeVariant="product"
            @updateValue="handlerChange"
          ></CommonSelectVariant>
        </UiLabelProfile>
        <UiLabelProfile class="col-span-2 md:col-span-1" label="Склад:">
          <CommonSelectWarehouse></CommonSelectWarehouse>
        </UiLabelProfile>
        <UiLabelProfile label="Підсклад:" class="col-span-2 md:col-span-1">
          <CommonSelectSubwarehouse v-model="inputs.status"></CommonSelectSubwarehouse>
        </UiLabelProfile>
        <UiLabelProfile
          class="col-span-2 md:col-span-1 row-span-2"
          label="Коментар:"
        >
          <UiTextareaProfile
            v-model="inputs.comment"
            class="min-h-[80px] md:h-full md:max-h-[120px]"
          ></UiTextareaProfile>
        </UiLabelProfile>
        <UiLabelProfile label="Категорія:" class="col-span-2 md:col-span-1">
          <UiInputProfile v-model="inputs.responsible"></UiInputProfile>
        </UiLabelProfile>
      </UiDivGridForm>
    </UiDivBorderBg>
  </form>
</template>

<style scoped></style>
