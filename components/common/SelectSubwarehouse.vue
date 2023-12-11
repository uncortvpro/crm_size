<script setup lang="ts">
const props = defineProps<{
  modelValue: string;
  placeholder?: boolean;
}>();

const emits = defineEmits(["actionUpdate", "update:modelValue"]);

const actionUpdate = () => {
  emits("actionUpdate");
};

const handleUpdate = () => {
  emits("update:modelValue", value.value);
};

const warehousesStore = useWarehousesStore();

const value = ref("");
const addVariantOption = "+ Додати інший підсклад";
const isModalAddSubwarehouses = ref(false);

const fetchSubwarehouses = () => {
  warehousesStore.fetchSubwarehouses();
};

const switchModalAddSubwarehouses = (value: boolean) => {
  isModalAddSubwarehouses.value = value;
};

const subwarehouses = computed<Subwarehouses[]>(
  () => warehousesStore.allSubwarehouses
);

const options = computed(() =>
  subwarehouses.value.map((el: Subwarehouses) => el.subwarehouse)
);
const fullOptions = computed(() => [...options.value, addVariantOption]);

const onChangeSelect = (value: string) => {
  if (value === addVariantOption) {
    switchModalAddSubwarehouses(true);
    return false;
  }

  handleUpdate();
  actionUpdate();
};

watchDeep(
  () => value.value,
  () => {
    onChangeSelect(value.value);
  }
);

const actionSuccessAdded = async () => {
  await fetchSubwarehouses();
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
