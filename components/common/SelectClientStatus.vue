<script setup lang="ts">
const emits = defineEmits(["updateValue"]);

const updateValue = (value: string) => {
  emits("updateValue", value);
};

const getOptions = () => {
  useAuthFetch(`${useApiUrl()}/get_statuses`)
    .then((res) => res.json())
    .then((res) => console.log(res));
};

getOptions();
</script>

<template>
  <UiSelectProfile
    typeSelect="status"
    @updateValue="updateValue"
    :options="['Постійний', 'Постійний']"
  />
</template>

<style scoped></style>
