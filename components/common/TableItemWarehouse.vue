<script setup lang="ts">
const props = defineProps<{
  product: GlobalProduct;
}>();

const emits = defineEmits(["deleteAction", "showDetails"]);

const showDetails = () => {
  emits("showDetails", props.product._id);
};

const router = useRouter();
</script>

<template>
  <UiTableItem>
    <template #header>
      <span class="max-w-[200px] w-full inline-block truncate"
        >{{ useDate(product?.name) }}
      </span>
    </template>
    <template #elements="{ active }">
      <UiTransitionTableCell :vIf="active">
        <template #title></template>
        <template #value>
          {{ useBase64(product?.variations[0].photos[0]) }}
        </template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Товар</template>
        <template #value>
          <span
            class="font-medium leading-[130%] max-w-[200px] inline-block truncate"
            >{{ product?.name }}</span
          ></template
        >
      </UiTransitionTableCell>

      <UiTransitionTableCell :vIf="active">
        <template #title>Статус</template>
        <template #value>
          <CommonStatusOutput :color="product.status.colour">{{
            product.status.status
          }}</CommonStatusOutput>
        </template>
      </UiTransitionTableCell>

      <UiTransitionTableCell :vIf="active">
        <template #title>Кількість</template>
        <template #value
          >{{ product?.pieces }}<CommonCurrencyText
        /></template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Джерело замовлення</template>
        <template #value>{{ 'product?.source' }}</template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Статус</template>
        <template #value>
          <CommonStatusOutput :color="product.status.colour">{{
            product.status.status
          }}</CommonStatusOutput>
        </template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Оплата</template>
        <template #value>{{ 'product?.payment' }}</template>
      </UiTransitionTableCell>
    </template>
    <template #additional-buttons>
      <div class="flex items-center gap-[5px] md:gap-[25px]">
        <UiButtonOpacityThreeDots
          @click.stop="showDetails"
        ></UiButtonOpacityThreeDots>
        <UiButtonOpacityEdit
          class="flex-shrink-0"
          @click.stop="navigateTo('/profile/edit_product/' + product._id)"
        />
        <UiButtonOpacityDelete class="flex-shrink-0" @click.stop="" />
      </div>
    </template>
  </UiTableItem>
</template>

<style scoped></style>
