<script setup lang="ts">
const props = defineProps<{
  variation: VariationProduct;
}>();

const emits = defineEmits(["showOrderDetails"]);

const showOrderDetails = () => {
  // emits("showOrderDetails", props.variation._id);
};
</script>

<template>
  <UiTableItem :isMobileClose="true">
    <template #header> S </template>
    <template #elements="{ active }">
      <UiTransitionTableCell class="3xl:w-[10%]" :vIf="active">
        <template #title>
          <div class="3xl:!hidden">
            <PagesAddingPhotoProductVariation v-model="variation.photos" />
          </div>
        </template>
        <template #value>
          <div class="!hidden 3xl:!block">
            <PagesAddingPhotoProductVariation v-model="variation.photos" />
          </div>
        </template>
      </UiTransitionTableCell>
      <UiTransitionTableCell class="3xl:w-[18%]" :vIf="active">
        <template #title>Розмір</template>
        <template #value>{{ variation.size }}</template>
      </UiTransitionTableCell>
      <UiTransitionTableCell class="3xl:w-[18%]" :vIf="active">
        <template #title>Колір</template>
        <template #value>{{ variation.colour }}</template>
      </UiTransitionTableCell>
      <UiTransitionTableCell class="3xl:w-[18%]" :vIf="active">
        <template #title>Собівартість товару</template>
        <template #value>
          <UiInputProfileTable
            type="number"
            v-model="variation.cost_price"
          ></UiInputProfileTable
          ><CommonCurrencyText
        /></template>
      </UiTransitionTableCell>
      <UiTransitionTableCell class="3xl:w-[18%]" :vIf="active">
        <template #title>Ціна</template>
        <template #value>
          <UiInputProfileTable
            type="number"
            v-model="variation.price"
          ></UiInputProfileTable
          ><CommonCurrencyText
        /></template>
      </UiTransitionTableCell>
      <UiTransitionTableCell class="3xl:w-[18%]" :vIf="active">
        <template #title>Кількість на складі</template>
        <template #value>
          <UiInputProfileTable
            type="number"
            v-model="variation.in_stock"
          ></UiInputProfileTable>
        </template>
      </UiTransitionTableCell>
    </template>
  </UiTableItem>
</template>

<style scoped></style>
