<script setup lang="ts">
const props = defineProps<{
  error: string;
  messageToUser: string;
  inputs: Order;
  orderProducts?: any[];
}>();

const emits = defineEmits(["updateInputs"]);

const handlerChange = (value: any, type: keyof Order) => {
  emits("updateInputs", value, type);
};
</script>

<template>
  <UiAlertDanger v-if="error">{{ error }}</UiAlertDanger>
  <UiAlertSuccess v-if="messageToUser">{{ messageToUser }}</UiAlertSuccess>
  <form action="#">
    <div class="flex flex-col 3xl:items-start 3xl:flex-row gap-[25px]">
      <UiDivBorderBg class="w-full 3xl:basis-[60%]">
        <UiDivGridForm>
          <UiHeader2 class="col-span-2"> Інформація </UiHeader2>
          <UiLabelProfile
            class="col-span-2 md:col-span-1"
            label="Обрати клієнта:"
          >
            <CommonSearchClients
              v-model:name="inputs.client"
              v-model:email="inputs.email"
            />
          </UiLabelProfile>
          <div class="flex items-center gap-[15px] md:mt-[10px]">
            <span class="text-[9px] md:text-[10px] xl:text-[12px]">або</span>
            <UiButtonOpacityBorderAddItem
              type="button"
              @click="navigateTo('/profile/new_client')"
              >Додати клієнта</UiButtonOpacityBorderAddItem
            >
          </div>
          <UiHeader2 class="col-span-2 mt-[10px] xl:mt-[20px]">
            Додаткова інформація
          </UiHeader2>
          <UiLabelProfile class="col-span-2 md:col-span-1" label="Доставка:">
            <CommonSelectVariant
              :valueSelect="inputs.shipping"
              typeSelect="shipping"
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
              :valueSelect="inputs.source"
              typeSelect="source"
              typeVariant="source"
              @updateValue="handlerChange"
            ></CommonSelectVariant>
          </UiLabelProfile>
          <UiLabelProfile class="col-span-2 md:col-span-1" label="Оплата:">
            <CommonSelectVariant
              :valueSelect="inputs.payment"
              typeSelect="payment"
              typeVariant="payment"
              @updateValue="handlerChange"
            ></CommonSelectVariant>
          </UiLabelProfile>
          <UiLabelProfile class="col-span-2" label="Коментар:">
            <UiTextareaProfile
              v-model="inputs.comment"
              class="min-h-[80px] md:min-h-[105px]"
            ></UiTextareaProfile>
          </UiLabelProfile>
        </UiDivGridForm>
      </UiDivBorderBg>
      <PagesProductToOrderAdding
        v-model="inputs.products"
        :startProducts="orderProducts"
        class="3xl:basis-[40%]"
      ></PagesProductToOrderAdding>
    </div>
  </form>
</template>

<style scoped></style>
