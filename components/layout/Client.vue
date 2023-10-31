<script setup lang="ts">
const props = defineProps<{
  labelStatus: string;
  inputs: Client;
}>();

const emits = defineEmits(["updateInputs"]);
const gender = computed(() => props.inputs.gender);

// const inputs = ref({
//   name: props.inputs.name || "",
//   phone: props.inputs.phone || "",
//   additional_phone: props.inputs.additional_phone || "",
//   email: props.inputs.email || "",
//   gender: props.inputs.gender || "",
//   birthday: props.inputs.birthday || "",
//   instagram: props.inputs.instagram || "",
//   telegram: props.inputs.telegram || "",
//   comment: props.inputs.comment || "",
//   status: props.inputs.status || "",
//   userpic: props.inputs.userpic || null,
// } as Client);

// console.log(inputs.value.gender);

const handlerChange = (value: any, type: keyof Client) => {
  emits("updateInputs", value, type);
};

// watch(
//   inputs,
//   () => {
//     emits("updateInputs", inputs.value);
//   },
//   { deep: true }
// );

// watch(
//   () => props.inputs,
//   () => {
//     inputs.value = props.inputs;
//   },
//   { deep: true }
// );
</script>

<template>
  <div>
    <div
      class="pt-[25px] md:pt-[35px] lg:pt-[45px] xl:pt-[59px] flex flex-col gap-[25px] xl:flex-row items-center justify-between xl:items-start"
    >
      <UiDivBorderBg class="max-w-[830px]">
        <form>
          <div
            class="grid grid-cols-2 gap-x-[11px] gap-y-[15px] xl:gap-x-[40px] xl:gap-y-[20px]"
          >
            <UiHeader2 class="col-span-2"> Інформація </UiHeader2>
            <UiLabelProfile label="Ім'я">
              <UiInputProfile v-model="inputs.name"></UiInputProfile>
            </UiLabelProfile>
            <UiLabelProfile label="Номер телефону:">
              <UiInputProfile v-model="inputs.phone"></UiInputProfile>
            </UiLabelProfile>

            <UiLabelProfile
              class="whitespace-nowrap truncate"
              label="Додатковий номер телефону:"
            >
              <UiInputProfile
                v-model="inputs.additional_phone"
              ></UiInputProfile>
            </UiLabelProfile>
            <UiLabelProfile label="Email:">
              <UiInputProfile v-model="inputs.email"></UiInputProfile>
            </UiLabelProfile>
            <div class="col-span-2 mt-[15px]">
              <UiHeader2> Додаткова інформація </UiHeader2>
            </div>
            <UiLabelProfile label="Стать:">
              <UiSelectProfile
                :valueSelect="inputs.gender"
                v-model="inputs.gender"
                typeSelect="gender"
                @updateValue="handlerChange"
                :options="['Чоловіча', 'Жіноча']"
              >
              </UiSelectProfile>
            </UiLabelProfile>
            <UiLabelProfile label="Дата народження:">
              <UiDatePicker
                v-model="inputs.birthday"
                :valueData="inputs.birthday"
              ></UiDatePicker>
            </UiLabelProfile>
            <UiLabelProfile label="Instagram:">
              <UiInputProfile v-model="inputs.instagram"></UiInputProfile>
            </UiLabelProfile>
            <UiLabelProfile label="Telegram:">
              <UiInputProfile v-model="inputs.telegram"></UiInputProfile>
            </UiLabelProfile>
            <UiLabelProfile class="col-span-2 self-stretch" label="Коментар:">
              <UiTextareaProfile
                v-model="inputs.comment"
                class="min-h-[80px] md:min-h-[90px] xl:min-h-[105px]"
              ></UiTextareaProfile>
            </UiLabelProfile>
          </div>
        </form>
      </UiDivBorderBg>
      <UiDivBorderBg class="max-w-[527px] flex flex-col items-center">
        <UiHeader2 class="text-center">Фото</UiHeader2>
        <UiInputFilePhoto
          typeInput="userpic"
          @updateInput="handlerChange"
        ></UiInputFilePhoto>

        <UiLabelProfile
          :label="labelStatus"
          class="self-stretch mt-[15px] lg:mt-[25px]"
        >
          <!-- <CommonSelectClientStatus
            typeSelect="status"
            @updateValue="handlerChange"
          ></CommonSelectClientStatus> -->
          <UiSelectProfile
            @updateValue="handlerChange"
            :options="['Постійний', 'Постійний']"
            :valueSelect="inputs.status"
            v-model="inputs.status"
            typeSelect="gender"
          >
          </UiSelectProfile>
        </UiLabelProfile>
      </UiDivBorderBg>
    </div>
  </div>
</template>

<style scoped></style>
