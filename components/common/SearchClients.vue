<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";

const props = defineProps<{
  name: string;
  email: string;
}>();
const emits = defineEmits(["update:name", "update:email"]);

const handleInput = (name: string, email: string) => {
  emits("update:name", name);
  emits("update:email", email);
};
const hiddenOutsideClickElement = ref(null);
const isShowClient = ref(false);
const switchShowClient = (value: boolean) => {
  isShowClient.value = value;
};

const valueSearch = ref("");
const clients = ref<Client[]>([]);

const getStartValue = () => {
  valueSearch.value = props.name || "";
};

const search = () => {
  useAuthFetch(`${useApiUrl()}/clients`, {
    body: {
      keyword: valueSearch.value,
    },
  })
    .then((res) => {
      clients.value = res.clients;
    })
    .catch((res) => {
      console.error(res);
    });
};

onClickOutside(hiddenOutsideClickElement, (event) => switchShowClient(false));

const onclickClient = (clientName: string, email: string) => {
  handleInput(clientName, email);
  valueSearch.value = clientName;
  switchShowClient(false);
};

watchDeep(
  () => props.name,
  () => {
    getStartValue();
  }
);
</script>

<template>
  <div class="relative z-50" ref="hiddenOutsideClickElement">
    <UiInputProfile
      v-model="valueSearch"
      @focus="switchShowClient(true)"
      @input="search"
      class="w-full"
    />
    <div
      v-if="isShowClient"
      class="absolute top-[100%] left-0 w-full bg-beige max-h-[300px] overflow-y-scroll scroll_bar"
    >
      <div>
        <UiButton
          v-for="client in clients"
          :key="client._id"
          @click="onclickClient(client.name, client.email)"
          class="text-[9px] md:text-[12px] truncate px-[7px] py-[10px] md:px-[10px] md:pt-[15px] duration-hover hover:bg-beige-1 w-full text-left"
        >
          {{ client.name }} ({{ client.email }})
        </UiButton>
        <p
          v-if="clients.length === 0"
          class="text-[9px] md:text-[12px] truncate px-[7px] py-[10px] md:px-[10px] md:pt-[15px] w-full text-left"
        >
          Не знайдено
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
