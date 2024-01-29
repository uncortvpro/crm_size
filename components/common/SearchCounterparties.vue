<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";

const props = defineProps<{
  counterpartie: string;
}>();
const emits = defineEmits(["update:counterpartie"]);

const handleInput = (counterpartie: string) => {
  emits("update:counterpartie", counterpartie);
};
const hiddenOutsideClickElement = ref(null);
const isShowCounterpartie = ref(false);
const switchShowCounterpartie = (value: boolean) => {
  isShowCounterpartie.value = value;
};

const valueSearch = ref("");
const counterparties = ref<any[]>([]);

const getStartValue = () => {
  valueSearch.value = props.counterpartie || "";
};

const search = () => {
  useAuthFetch(`${useApiUrl()}/counterparties`, {
    body: {
      keyword: valueSearch.value,
    },
  })
    .then((res) => {
      counterparties.value = res.counterparties;
    })
    .catch((res) => {
      console.error(res);
    });
};

onClickOutside(hiddenOutsideClickElement, (event) =>
  switchShowCounterpartie(false)
);

const onclickClient = (counterpartie: string) => {
  handleInput(counterpartie);
  valueSearch.value = counterpartie;
  switchShowCounterpartie(false);
};

search();

watchDeep(
  () => props.counterpartie,
  () => {
    getStartValue();
  }
);
</script>

<template>
  <div class="relative z-10" ref="hiddenOutsideClickElement">
    <UiInputProfile
      v-model="valueSearch"
      @focus="switchShowCounterpartie(true)"
      @input="search"
      class="w-full"
    />
    <div
      v-if="isShowCounterpartie"
      class="absolute top-[100%] left-0 w-full bg-beige max-h-[300px] overflow-y-scroll scroll_bar"
    >
      <div>
        <UiButton
          v-for="counterpartie in counterparties"
          :key="counterpartie._id"
          @click="onclickClient(counterpartie.name)"
          class="text-[9px] md:text-[12px] truncate px-[7px] py-[10px] md:px-[10px] md:pt-[15px] duration-hover hover:bg-beige-1 w-full text-left"
        >
          {{ counterpartie.name }}
        </UiButton>
        <p
          v-if="counterparties.length === 0"
          class="text-[9px] md:text-[12px] truncate px-[7px] py-[10px] md:px-[10px] md:pt-[15px] w-full text-left"
        >
          Не знайдено
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
