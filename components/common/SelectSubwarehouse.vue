<script setup lang="ts">
const props = defineProps<{
  modelValue: string;
}>();
const value = ref("");

const emits = defineEmits(["actionUpdate", "update:modelValue"]);

const actionUpdate = () => {
  emits("actionUpdate");
};

const handleUpdate = () => {
  emits("update:modelValue", value.value);
};

const subwarehouses = ref<Subwarehouses[]>([]);
const options = computed(() =>
  subwarehouses.value.map((el: Subwarehouses) => el.subwarehouse)
);

const getSubwarehouses = () => {
  useAuthFetch(`${useApiUrl()}/subwarehouses`).then((res) => {
    subwarehouses.value = res.subwarehouses;
  });
};

getSubwarehouses();

watchDeep(
  () => value.value,
  () => {
    handleUpdate();
    actionUpdate();
  }
);
</script>

<template>
  <UiSelectProfile
    placeholder="Оберіть склад"
    v-model="value"
    :options="options"
    :valueSelect="value"
  ></UiSelectProfile>
</template>

<style scoped></style>
