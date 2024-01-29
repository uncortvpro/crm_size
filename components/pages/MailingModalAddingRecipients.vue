<script setup lang="ts">
const props = defineProps<{
  mailingEmails: string[];
  typeMessage: "telegram" | "mail";
}>();

const emits = defineEmits(["update:mailingEmails", "switcherModal"]);

const updateMailingEmails = (value: string[]) => {
  emits("update:mailingEmails", value);
};

const categories = ref<any[]>([]);
const error = ref("");

const inputs = ref({
  category: "",
  min_price: "",
  max_price: "",
  min_total_price: "",
  min_max_price: "",
});

const fetchCategories = () => {
  useAuthFetch(`${useApiUrl()}/get_category`).then((res) => {
    categories.value = res.categories;
  });
};

const checkInputs = () => {
  const body = {
    category: inputs.value.category,
  };

  if (inputs.value.min_max_price) {
    Object.assign(body, {
      min_max_price: +inputs.value.min_max_price,
    });
  }

  if (inputs.value.min_total_price) {
    Object.assign(body, {
      min_total_price: +inputs.value.min_total_price,
    });
  }
  if (inputs.value.min_price) {
    Object.assign(body, {
      min_price: +inputs.value.min_price,
    });
  }
  if (inputs.value.max_price) {
    Object.assign(body, {
      max_price: +inputs.value.max_price,
    });
  }

  return body;
};

const fetchMailingEmails = () => {
  useAuthFetch(`${useApiUrl()}/new_mailing_list`, {
    body: checkInputs(),
  }).then((res: any) => {
    if (res.emails.length === 0) {
      error.value = "Нічого не знайдено!";
      return false;
    }
    updateMailingEmails(res.emails);
    error.value = "";
    emits("switcherModal", false);
  });
};

const fetchMailingTelegrams = () => {
  useAuthFetch(`${useApiUrl()}/new_telegram_list`, {
    body: checkInputs(),
  }).then((res: any) => {
    console.log(res);

    if (res.tgIDs.length === 0) {
      error.value = "Нічого не знайдено!";
      return false;
    }
    updateMailingEmails(res.tgIDs);
    error.value = "";
    emits("switcherModal", false);
  });
};

const getMailingList = () => {
  if (!inputs.value.category) {
    return false;
  }
  if (props.typeMessage === "mail") {
    fetchMailingEmails();
  }
  if (props.typeMessage === "telegram") {
    fetchMailingTelegrams();
  }
};

fetchCategories();
</script>

<template>
  <UiModalTitle title="Отримувачі" :ui="{ width: '!max-w-[480px]' }">
    <div class="flex flex-col mt-[7px] md:mt-[10px] xl:mt-[13px]">
      <UiLabelProfile label="Ціна товару:" class="">
        <div class="flex items-center gap-[15px]">
          <UiLabelProfile
            noLabelTruncate
            class="!flex-row flex-1 items-center !gap-[10px]"
            label="від"
          >
            <UiInputProfile
              v-model="inputs.min_price"
              type="number"
              class="w-full"
            ></UiInputProfile>
          </UiLabelProfile>
          <UiLabelProfile
            noLabelTruncate
            class="!flex-row flex-1 items-center !gap-[10px]"
            label="до"
          >
            <UiInputProfile
              type="number"
              v-model="inputs.max_price"
              class="w-full"
            ></UiInputProfile>
          </UiLabelProfile>
        </div>
      </UiLabelProfile>
      <UiLabelProfile
        class="mt-[15px] xl:mt-[20px]"
        label="Загальна вартість замовлення:"
      >
        <div class="flex items-center gap-[15px]">
          <UiLabelProfile
            noLabelTruncate
            class="!flex-row flex-1 items-center !gap-[10px]"
            label="від"
          >
            <UiInputProfile
              type="number"
              v-model="inputs.min_total_price"
              class="w-full"
            ></UiInputProfile>
          </UiLabelProfile>
          <UiLabelProfile
            noLabelTruncate
            class="!flex-row flex-1 items-center !gap-[10px]"
            label="до"
          >
            <UiInputProfile
              type="number"
              v-model="inputs.min_max_price"
              class="w-full"
            ></UiInputProfile>
          </UiLabelProfile>
        </div>
      </UiLabelProfile>
      <UiLabelProfile class="mt-[15px] xl:mt-[20px]" label="Категорія товару:">
        <UiSelectProfile
          v-model="inputs.category"
          :valueSelect="inputs.category"
          :options="categories"
          class="lg:max-w-[320px]"
        ></UiSelectProfile>
      </UiLabelProfile>
      <UiAlertDanger v-if="error">{{ error }}</UiAlertDanger>
      <UiButtonOpacityBorder
        :disabled="!inputs.category"
        @click="getMailingList"
        class="mt-[35px] self-center xl:mt-[45px]"
        >Зберегти</UiButtonOpacityBorder
      >
    </div>
  </UiModalTitle>
</template>

<style scoped></style>
