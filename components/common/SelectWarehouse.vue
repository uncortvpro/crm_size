<script setup lang="ts">

const warehousesStore = useWarehousesStore();

const warehouses = computed(() => warehousesStore.warehouses);

const options = computed(() => warehouses.value.map((el) => el.name));
</script>

<template>
  <UiSelectProfile
    :options="options"
  ></UiSelectProfile>
</template>

<style scoped></style>
