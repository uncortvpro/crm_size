<script setup lang="ts">
const props = defineProps<{
  currentSubwarehouses: Subwarehouses;
}>();

const emits = defineEmits(["actionChangeSubwarehouses"]);

const actionChangeSubwarehouses = (subwarehouses: Subwarehouses) => {
  emits("actionChangeSubwarehouses", subwarehouses);
};

const warehousesStore = useWarehousesStore();

const subwarehouses = computed(
  () => warehousesStore.allSubwarehouses as Subwarehouses[]
);

const items = computed(() =>
  subwarehouses.value.map((el: Subwarehouses) => {
    return [
      {
        label: el.subwarehouse,
        subwarehouse: el,
        active:
          props.currentSubwarehouses.subwarehouse === el.subwarehouse &&
          props.currentSubwarehouses.warehouse === el.warehouse
            ? true
            : false,
        slot: "switchWarehouse",
        click: () => {
          actionChangeSubwarehouses(el);
        },
      },
    ];
  })
);
</script>

<template>
  <UDropdown
    :ui="{
      width: 'w-[240px]',
      rounded: 'rounded-[2px]',
      ring: '',
      shadow: 'shadow-lg',
      divide: '',
    }"
    :items="items"
    :popper="{ placement: 'bottom-start' }"
  >
    <UiButtonIconProfileOpening
      :value="currentSubwarehouses.subwarehouse"
      :open="false"
    >
    </UiButtonIconProfileOpening>
    <template #switchWarehouse="{ item }">
      <div class="whitespace-nowrap truncate inline-block">
        <UiCheckbox
          v-model="item.active"
          :ui="{ rounded: 'rounded-[2px]', border: 'border-black' }"
          >{{ item.subwarehouse.warehouse }}</UiCheckbox
        >
        <UiCheckbox
        class="ml-[20px]"
          v-model="item.active"
          :ui="{ rounded: 'rounded-[2px]', border: 'border-black' }"
          >{{ item.subwarehouse.subwarehouse }}</UiCheckbox
        >
      </div>
    </template>
  </UDropdown>
</template>

<style scoped></style>
