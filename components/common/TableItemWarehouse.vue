<script setup lang="ts">
const props = defineProps<{
  product: GlobalProduct;
}>();

const emits = defineEmits(["deleteAction"]);

const deleteAction = () => {
  emits("deleteAction");
};

const router = useRouter();
</script>

<template>
  <UiTableItem>
    <template #header>
      <span class="max-w-[200px] w-full inline-block truncate"
        >{{ product?.name }}
      </span>
    </template>
    <template #elements="{ active }">
      <UiTransitionTableCell :vIf="active">
        <template #title>
          <img
            class="w-[23px] h-[28px] 3xl:w-[30px] 3xl:h-[35px] object-cover"
            :src="
              useBase64(product?.photo) ||
              useBase64(product?.variations[0]?.photos[0])
            "
            alt=""
          />
        </template>
        <template #value>
          <img
            class="w-[23px] h-[28px] 3xl:w-[30px] 3xl:h-[35px] object-cover hidden 3xl:inline-block"
            :src="
              useBase64(product?.photo) ||
              useBase64(product?.variations[0]?.photos[0])
            "
            alt=""
          />
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
        <template #value>{{ product?.pieces }}<CommonCurrencyText /></template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Склади</template>
        <template #value>
          <CommonSelectSwitchWarehouse></CommonSelectSwitchWarehouse
        ></template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Категорія</template>
        <template #value>
          {{ product?.category }}
        </template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Коментар</template>
        <template #value> {{ product.comment }}</template>
      </UiTransitionTableCell>
    </template>
    <template #additional-buttons>
      <div class="flex items-center gap-[5px] md:gap-[25px]">
        <UiButtonOpacityEdit
          class="flex-shrink-0"
          @click.stop="navigateTo('/profile/edit_product/' + product._id)"
        />
        <UiButtonOpacityDelete
          class="flex-shrink-0"
          @click.stop="deleteAction"
        />
      </div>
    </template>
  </UiTableItem>
</template>

<style scoped></style>
