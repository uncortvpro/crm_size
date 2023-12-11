<script setup lang="ts">
const props = defineProps<{
  warehouseId: Warehouse["id"];
}>();

const warehousesStore = useWarehousesStore();

const subwarehouse = ref("");
const currentIdProduct = ref("");
const isModalRemove = ref(false);
const isModalChangeWarehouses = ref(false);
const newWarehouses = ref<Subwarehouses | null>(null);

const switchModalRemove = (value: boolean) => {
  isModalRemove.value = value;
};

const switchChangeWarehouses = (value: boolean) => {
  isModalChangeWarehouses.value = value;
};

const warehouseType = () => warehousesStore.warehouseType(props.warehouseId);

const deleteAction = (id: string) => {
  currentIdProduct.value = id;
  switchModalRemove(true);
};

const sorting = computed(() => warehousesStore.sorting[warehouseType()]);
const reverseSorting = computed(
  () => warehousesStore.reverseSorting[warehouseType()]
);
const setSorting = (sorting: SortingProducts) => {
  warehousesStore.setSorting(sorting, props.warehouseId);
};

const page = computed(() => warehousesStore.page[warehouseType()]);
const endPage = computed(() => warehousesStore.endPage[warehouseType()]);
const setPage = (page: number) =>
  warehousesStore.setPage(page, props.warehouseId);

const products = computed<GlobalProduct[]>(
  () => warehousesStore.warehouseProducts[warehouseType()]
);
const setSubwarehouse = () =>
  warehousesStore.setSubwarehouse(subwarehouse.value, props.warehouseId);

const fetchProducts = () => warehousesStore.fetchProducts(props.warehouseId);
const searchProducts = (keyword: string) =>
  warehousesStore.searchProducts(keyword, props.warehouseId);

const deleteProducts = () => {
  warehousesStore.deleteProducts(currentIdProduct.value, props.warehouseId);
  switchModalRemove(false);
};

const changeWarehouses = () => {
  const currentProduct: GlobalProduct = products.value?.find(
    (el) => el._id === currentIdProduct.value
  ) as GlobalProduct;

  useAuthFetch(`${useApiUrl()}/change_product_warehouse`, {
    body: {
      product_id: currentIdProduct.value,
      warehouse: newWarehouses.value?.warehouse,
      subwarehouse: newWarehouses.value?.subwarehouse,
    },
  }).then((res) => {
    if (res.message === true) {
      fetchProducts();
      switchChangeWarehouses(false);
    }
  });
};

const changeWarehousesAction = (id: string, warehouse: Subwarehouses) => {
  currentIdProduct.value = id;
  newWarehouses.value = warehouse;
  switchChangeWarehouses(true);
};

fetchProducts();
</script>
<template>
  <div>
    <CommonNavigationPage
      @search="searchProducts"
      @add="navigateTo('new_product')"
    >
      <template #add_name> Додати товар</template>
    </CommonNavigationPage>

    <UiModalWarning
      v-if="currentIdProduct"
      v-model="isModalRemove"
      @closeModal="switchModalRemove(false)"
      @confirm="deleteProducts"
      >Ви впевнені, що хочете видалити товар?</UiModalWarning
    >

    <UiModalWarning
      v-if="currentIdProduct"
      v-model="isModalChangeWarehouses"
      @closeModal="switchChangeWarehouses(false)"
      @confirm="changeWarehouses"
      >Ви впевнені, що хочете перемістити товар?</UiModalWarning
    >

    <CommonTable
      :endPage="endPage"
      :pageTable="page"
      @setPage="setPage"
      class="bg-beige-light"
    >
      <template #additional_elements>
        <CommonSelectSubwarehouse
          placeholder
          v-model="subwarehouse"
          @actionUpdate="setSubwarehouse"
          class="max-w-[213px] mb-[15px] 3xl:mb-[5px]"
        ></CommonSelectSubwarehouse>
      </template>
      <template #headers>
        <UiTableCellHeader></UiTableCellHeader>
        <UiTableCellHeader>Товар</UiTableCellHeader>
        <UiTableCellHeader>Статус</UiTableCellHeader>
        <UiTableCellHeader>
          <CommonButtonSortingTable
            :sortingUp="sorting === 'pieces' && reverseSorting"
            :sortingDown="sorting === 'pieces' && !reverseSorting"
            @click="setSorting('pieces')"
            class="!font-normal"
          >
            Кількість</CommonButtonSortingTable
          ></UiTableCellHeader
        >
        <UiTableCellHeader>Склади</UiTableCellHeader>
        <UiTableCellHeader>Категорія</UiTableCellHeader>
        <UiTableCellHeader>Коментар</UiTableCellHeader>
      </template>
      <template #items>
        <CommonTableItemWarehouse
          v-for="product in products"
          :key="product._id"
          :product="product"
          @deleteAction="deleteAction(product._id)"
          @changeWarehousesAction="changeWarehousesAction"
        />
      </template>
    </CommonTable>
  </div>
</template>

<style scoped></style>
