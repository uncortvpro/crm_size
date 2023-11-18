<script setup lang="ts">
const warehousesStore = useWarehousesStore();

const warehousesItems = warehousesStore.warehouses.map((item: Warehouse) => {
  return {
    id: item.id,
    label: item.name,
    slot: "warehousesSlot",
  };
});
</script>

<template>
  <LayoutProfilePage title="Склади">
    <template #content>
      <UTabs
        :ui="{
          container: '!pt-[20px]',
          list: {
            base: 'bg-transparent h-auto gap-[10px] md:gap-[35px] !p-0 !flex  flex-col !items-start xs:flex-row xs:!items-center',
            width: 'w-fit',
            marker: {
              wrapper: 'hidden',
            },
            tab: {
              base: '!text-[9px] md:!text-[12px] truncate !inline-flex justify-start lg:!text-[15px] !h-auto w-fit focus:!ring-0 !p-0',
              active: '!text-black',
              inactive: '!text-beige-1',
            },
          },
        }"
        :items="warehousesItems"
        :default-index="0"
      >
        <template #warehousesSlot="{ item }">
          <LayoutWarehouses :warehouseId="item.id"></LayoutWarehouses>
        </template>
      </UTabs>
    </template>
  </LayoutProfilePage>
</template>

<style scoped></style>
