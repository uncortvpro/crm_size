<script setup lang="ts">
const activeItem = ref(false);
const { width, height } = useWindowSize();

const active = computed(() => {
  if (width.value >= 1600) {
    return true;
  }
  if (activeItem.value) {
    return true;
  }
  return false;
});

const switchItem = (value: boolean) => {
  activeItem.value = value;
};
</script>

<template>
  <tr
    class="grid relative grid-cols-auto-3 3xl:table-row border-b py-[5px] border-beige-1"
  >
    <UiTableCellPadding
      @click="switchItem(!activeItem)"
      class="col-span-2 3xl:hidden cursor-pointer font-medium"
      >Максим</UiTableCellPadding
    >
    <UiTransitionTableItem>
      <UiTableCell
        v-if="active"
        class="!hidden 3xl:!table-cell order-2 col-span-3"
      >
        <template #title>Ім’я</template>
        <template #value
          ><UiButtonText class="font-medium leading-[130%]"
            >Максим</UiButtonText
          ></template
        >
      </UiTableCell>
    </UiTransitionTableItem>
    <UiTransitionTableItem>
      <UiTableCell v-if="active" class="order-3 col-span-3">
        <template #title>Номер телефону</template>
        <template #value>+380956854219</template>
      </UiTableCell>
    </UiTransitionTableItem>
    <UiTransitionTableItem>
      <UiTableCell v-if="active" class="order-4 col-span-3">
        <template #title>Email</template>
        <template #value> max@example.com</template>
      </UiTableCell>
    </UiTransitionTableItem>
    <UiTransitionTableItem>
      <UiTableCell v-if="active" class="order-5 col-span-3">
        <template #title>Instagram</template>
        <template #value>@max_the_adventurer</template>
      </UiTableCell>
    </UiTransitionTableItem>
    <UiTransitionTableItem>
      <UiTableCell v-if="active" class="order-6 col-span-3">
        <template #title>Історія покупок</template>
        <template #value>5 замовлень</template>
      </UiTableCell>
    </UiTransitionTableItem>
    <UiTransitionTableItem>
      <UiTableCell v-if="active" class="order-7 col-span-3">
        <template #title>Тотал сума покупок</template>
        <template #value>12063₴</template>
      </UiTableCell>
    </UiTransitionTableItem>
    <UiTransitionTableItem>
      <UiTableCell v-if="active" class="order-8 col-span-3">
        <template #title>Дата останньої покупки</template>
        <template #value>23.10.2023</template>
      </UiTableCell>
    </UiTransitionTableItem>
    <UiTransitionTableItem>
      <UiTableCell v-if="active" class="order-9 col-span-3">
        <template #title>Статус</template>
        <template #value
          ><CommonStatusOutput>Постійний</CommonStatusOutput></template
        >
      </UiTableCell>
    </UiTransitionTableItem>
    <UiTableCellPadding
      @click="switchItem(!activeItem)"
      class="relative cursor-pointer z-10 order-1"
    >
      <div class="flex justify-end items-center gap-1">
        <UiButtonOpacityEdit @click.stop="" />
        <UiButtonOpacityDelete @click.stop="" />
        <UiButtonOpacity
          @click.stop="switchItem(!activeItem)"
          class="3xl:hidden"
        >
          <SvgoArrowTop
            color="transparent"
            class="!w-[14px] rotate-180 duration-300 ml-[25px] !h-[7px]"
            :class="{ 'rotate-0': activeItem }"
          ></SvgoArrowTop>
        </UiButtonOpacity>
      </div>
    </UiTableCellPadding>
    <UiTransitionTableItem>
      <UiTableCellPadding v-if="active" class="3xl:hidden order-10 col-span-3">
        <UiButtonTextArrowRight>Детальніше</UiButtonTextArrowRight>
      </UiTableCellPadding>
    </UiTransitionTableItem>
    <button
      v-if="!activeItem"
      @click="switchItem(!activeItem)"
      class="3xl:hidden absolute hover:bg-dark-transparent w-full h-full top-0 left-0"
    ></button>
  </tr>
</template>

<style scoped></style>
