<script setup lang="ts">
const props = defineProps<{
  variation: VariationProduct;
}>();

const emits = defineEmits(["deleteAction"]);

const deleteAction = () => {
  emits("deleteAction");
};
</script>

<template>
  <UiTableItem :isMobileClose="true">
    <template #header> {{ variation.size }}, {{ variation.colour }} </template>
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
    <template #additional-buttons>
      <div class="flex items-center gap-[5px] md:gap-[25px]">
        <UiButtonOpacityDelete
          class="flex-shrink-0"
          @click.stop="deleteAction"
        />
      </div>
    </template>
  </UiTableItem>
</template>

<style scoped></style>
