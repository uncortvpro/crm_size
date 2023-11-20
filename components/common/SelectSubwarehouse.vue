<script setup lang="ts">
const props = defineProps<{
  modelValue: string;
  placeholder?: boolean;
}>();
const value = ref("");
const addVariantOption = "+ Додати інший підсклад";
const isModalAddSubwarehouses = ref(false);
const switchModalAddSubwarehouses = (value: boolean) => {
  isModalAddSubwarehouses.value = value;
};

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
const fullOptions = computed(() => [...options.value, addVariantOption]);

const getSubwarehouses = () => {
  useAuthFetch(`${useApiUrl()}/subwarehouses`).then((res) => {
    subwarehouses.value = res.subwarehouses;
  });
};

const onChangeSelect = (value: string) => {
  if (value === addVariantOption) {
    switchModalAddSubwarehouses(true);
    return false;
  }

  handleUpdate();
  actionUpdate();
};

getSubwarehouses();

watchDeep(
  () => value.value,
  () => {
    onChangeSelect(value.value);
  }
);

const actionSuccessAdded = async () => {
  await getSubwarehouses();
  switchModalAddSubwarehouses(false);
};
</script>

<template>
  <div>
    <UiSelectProfile
      :placeholder="placeholder ? 'Оберіть склад' : undefined"
      v-model="value"
      :options="fullOptions"
      :valueSelect="modelValue"
    ></UiSelectProfile>

    <CommonModalAddSubwarehouse
      v-model="isModalAddSubwarehouses"
      @actionSuccess="actionSuccessAdded"
    />
  </div>
</template>

<style scoped></style>
