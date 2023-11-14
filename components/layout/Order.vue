<script setup lang="ts">
defineProps<{
  error: string;
  messageToUser: string;
  inputs: Objective;
}>();

const emits = defineEmits(["updateInputs"]);

const handlerChange = (value: any, type: keyof Client) => {
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
        <UiLabelProfile
          class="col-span-2 md:col-span-1"
          label="Обрати клієнта:"
        >
          <UiInputProfile />
        </UiLabelProfile>
        <div class="flex items-center gap-[15px] md:mt-[10px]">
          <span class="text-[9px] md:text-[10px] xl:text-[12px]">або</span>
          <UiButtonOpacityBorderAddItem
            >Додати клієнта</UiButtonOpacityBorderAddItem
          >
        </div>
        <UiHeader2 class="col-span-2 mt-[10px] xl:mt-[20px]">
          Додаткова інформація
        </UiHeader2>
        <UiLabelProfile class="col-span-2 md:col-span-1" label="Доставка:">
          <CommonSelectVariant
            :valueSelect="inputs.status"
            typeSelect=""
            typeVariant="shipping"
            @updateValue="handlerChange"
          ></CommonSelectVariant>
        </UiLabelProfile>
        <UiLabelProfile
          class="col-span-2 md:col-span-1"
          label="Обрати статус замовлення:"
        >
          <CommonSelectVariant
            :valueSelect="inputs.status"
            typeSelect="status"
            typeVariant="order"
            @updateValue="handlerChange"
          ></CommonSelectVariant>
        </UiLabelProfile>
        <UiLabelProfile
          class="col-span-2 md:col-span-1"
          label="Джерело замовлення:"
        >
          <CommonSelectVariant
            :valueSelect="inputs.status"
            typeSelect=""
            typeVariant="source"
            @updateValue="handlerChange"
          ></CommonSelectVariant>
        </UiLabelProfile>
        <UiLabelProfile class="col-span-2 md:col-span-1" label="Оплата:">
          <CommonSelectVariant
            :valueSelect="inputs.status"
            typeSelect=""
            typeVariant="payment"
            @updateValue="handlerChange"
          ></CommonSelectVariant>
        </UiLabelProfile>
        <UiLabelProfile class="col-span-2" label="Коментар:">
          <UiTextareaProfile class="min-h-[80px] md:min-h-[105px]"></UiTextareaProfile>
        </UiLabelProfile>
      </UiDivGridForm>
    </UiDivBorderBg>
  </form>
</template>

<style scoped></style>
