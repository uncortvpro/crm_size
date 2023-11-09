<script setup lang="ts">
const props = defineProps<{
  valueSelect?: string;
}>();

const emits = defineEmits(["updateValue"]);

const updateValue = (value: string) => {
  emits("updateValue", value);
};

const options = ref<string[]>([]);

const getOptions = () => {
  useAuthFetch(`${useApiUrl()}/get_statuses`, {
    body: {
      type: "client",
    },
  }).then((res) => {
    const response = res.statuses as StatusClient[];

    options.value = response.map((status) => status.status);
  });
};

getOptions();
</script>

<template>
  <UiSelectProfile
    :valueSelect="valueSelect"
    :options="options"
    typeSelect="gender"
  />
</template>

<style scoped></style>
