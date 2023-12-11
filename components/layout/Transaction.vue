<script setup lang="ts">
const props = defineProps<{
  error: string;
  messageToUser: string;
  inputs: InputsTransaction;
}>();

const emits = defineEmits(["updateInputs"]);

const handlerChange = (value: any, type: keyof InputsTransaction) => {
  emits("updateInputs", value, type);
};

const cashiers = ref<string[]>([]);
const addVariantOption = "+ Додати касу";
const cashiersOptions = computed(() => [...cashiers.value, addVariantOption]);

const isAddCashierModal = ref(false);

const switchModalAddCashier = (value: boolean) => {
  isAddCashierModal.value = value;
};

const isAddCounterpartiesModal = ref(false);

const switchModalAddCounterparties = (value: boolean) => {
  isAddCounterpartiesModal.value = value;
};

const onChangeSelectCashiers = (value: string) => {
  if (value === addVariantOption) {
    switchModalAddCashier(true);
    handlerChange("", "cashier");
  }
};

const fetchCashier = () => {
  useAuthFetch(`${useApiUrl()}/cashiers`).then((res) => {
    cashiers.value = res.cashiers.map((el: Cashier) => el.name);
  });
};

const successActionAddCashier = () => {
  switchModalAddCashier(false);
  fetchCashier();
};


fetchCashier();
</script>

<template>
  <UiAlertDanger v-if="error">{{ error }}</UiAlertDanger>
  <UiAlertSuccess v-if="messageToUser">{{ messageToUser }}</UiAlertSuccess>
  <CommonModalAddCashier
    @successAction="successActionAddCashier"
    v-model="isAddCashierModal"
  ></CommonModalAddCashier>
  <CommonModalAddCounterpartie
    v-model="isAddCounterpartiesModal"
    @closeModal="switchModalAddCounterparties(false)"
  ></CommonModalAddCounterpartie>
  <form action="#">
    <UiDivBorderBg class="w-full max-w-[1008px]">
      <UiDivGridForm>
        <UiHeader2 class="col-span-2"> Інформація </UiHeader2>
        <div class="col-span-2 flex items-center gap-[10px]">
          <UiRadioText v-model="inputs.type" value="На рахунок"
            >На рахунок</UiRadioText
          >
          <p>
            <SvgoChangeTransaction color="transparent"></SvgoChangeTransaction>
          </p>
          <UiRadioText v-model="inputs.type" value="З рахунку"
            >З рахунку</UiRadioText
          >
        </div>
        <UiLabelProfile
          class="col-span-2 relative z-90 md:col-span-1"
          label="Оберіть касу:"
        >
          <UiSelectProfile
            class="relative z-90"
            @change="onChangeSelectCashiers"
            v-model="inputs.cashier"
            :valueSelect="inputs.cashier"
            :options="cashiersOptions"
          ></UiSelectProfile>
        </UiLabelProfile>
        <UiLabelProfile
          class="col-span-2 md:col-span-1"
          label="Введіть суму транзакції:"
        >
          <UiInputProfile v-model="inputs.sum" type="number"></UiInputProfile>
        </UiLabelProfile>
        <UiLabelProfile
          class="col-span-2 md:col-span-1"
          label="Оберіть контрагента:"
        >
          <CommonSearchCounterparties
            v-model:counterpartie="inputs.counterpartie"
          ></CommonSearchCounterparties>
        </UiLabelProfile>
        <div class="self-end flex items-center gap-[15px]">
          <span class="text-[9px] md:text-[10px] xl:text-[12px]">або</span>
          <UiButtonOpacityBorderAddItem
            @click="switchModalAddCounterparties(true)"
            type="button"
            >Додати контрагента</UiButtonOpacityBorderAddItem
          >
        </div>
        <UiHeader2 class="col-span-2 mt-[30px] xl:mt-[55px]">
          Додаткова інформація
        </UiHeader2>
        <UiLabelProfile
          class="col-span-2 md:col-span-1"
          label="Дата транзакції:"
        >
          <UiDatePicker
            v-model="inputs.date"
            :valueData="inputs.date"
          ></UiDatePicker>
        </UiLabelProfile>
        <UiLabelProfile class="col-span-2 md:col-span-1" label="Категорія:">
          <CommonSelectVariant
            :valueSelect="inputs.category"
            typeSelect="category"
            typeVariant="category_transaction"
            @updateValue="handlerChange"
          ></CommonSelectVariant>
        </UiLabelProfile>
        <UiLabelProfile label="Коментар:" class="col-span-2 md:col-span-1">
          <UiTextareaProfile
            v-model="inputs.comment"
            class="min-h-[80px] xl:min-h-[105px]"
          ></UiTextareaProfile>
        </UiLabelProfile>
        <div class="col-span-2">
          <UiCheckbox v-model="inputs.recuring">Створити автоплатіж</UiCheckbox>
        </div>
        <UiLabelProfile
          v-if="inputs.recuring"
          label="Зазначте періодичність:"
          class="col-span-2"
        >
          <div class="flex items-center mt-[5px] gap-[30px]">
            <UiRadio
              v-model="inputs.periodicity"
              value="7"
              label="Раз на тиждень"
            ></UiRadio>
            <UiRadio
              v-model="inputs.periodicity"
              value="30"
              label="Раз на місяць"
            ></UiRadio>
          </div>
        </UiLabelProfile>
      </UiDivGridForm>
    </UiDivBorderBg>
  </form>
</template>

<style scoped></style>
