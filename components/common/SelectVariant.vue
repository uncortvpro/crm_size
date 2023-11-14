<script setup lang="ts">
const props = defineProps<{
  valueSelect?: string;
  typeSelect?: string;
  typeVariant: VariantType;
}>();

const value = ref("");
const addVariantOption = "+ Додати інший варіант";

const emits = defineEmits(["updateValue"]);

const updateValue = (value: string) => {
  emits("updateValue", value, props.typeSelect);
};

const onChangeSelect = (value: string) => {
  if (value === addVariantOption) {
    switchModal(true);
    return false;
  }

  updateValue(value);
};

const isAddVariant = ref(false);
const switchModal = (value: boolean) => {
  isAddVariant.value = value;
};

const options = ref<string[]>([]);

const fullOptions = computed(() => [...options.value, addVariantOption]);

const getOptions = () => {
  useAuthFetch(`${useApiUrl()}/get_statuses`, {
    body: {
      type: props.typeVariant,
    },
  }).then((res) => {
    const response = res.statuses as StatusClient[];

    options.value = response.map((status) => status.status);
  });
};

getOptions();
</script>

<template>
  <div>
    <UiSelectProfile
      v-model="value"
      :valueSelect="valueSelect"
      :options="fullOptions"
      @change="onChangeSelect"
    >
    </UiSelectProfile>

    <CommonModalAddStatus
      v-if="typeSelect === 'status'"
      v-model="isAddVariant"
      :type="props.typeVariant"
      @actionSuccess="
        () => {
          getOptions();
          switchModal(false);
        }
      "
    />

    <CommonModalAddVariant
      v-else
      v-model="isAddVariant"
      :type="props.typeVariant"
      @actionSuccess="
        () => {
          getOptions();
          switchModal(false);
        }
      "
    />
  </div>
</template>

<style scoped></style>
