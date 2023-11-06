<script setup lang="ts">
defineProps({
  isMobileClose: {
    default: true,
    type: Boolean,
    required: false,
  },
});
const activeItem = ref(false);
const { width, height } = useWindowSize();
const router = useRouter();

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
    class="grid relative grid-cols-auto-3 sm:grid-cols-auto-3 3xl:table-row border-b py-[5px] border-beige-1"
  >
    <UiTableCellPadding
      v-if="$slots.header"
      @click="switchItem(!activeItem)"
      class="col-span-1 sm:col-span-2 3xl:hidden cursor-pointer font-medium -order-2"
      ><slot name="header"></slot
    ></UiTableCellPadding>
    <slot name="elements" :active="active"></slot>
    <UiTableCellPadding
      @click="switchItem(!activeItem)"
      class="relative cursor-pointer z-10 -order-1 col-span-2 sm:col-span-1"
      v-if="$slots.header || isMobileClose"
    >
      <div class="flex justify-end items-center gap-1">
        <slot name="additional-buttons" />
        <UiButtonOpacity
          v-if="isMobileClose"
          @click.stop="switchItem(!activeItem)"
          class="3xl:hidden"
        >
          <SvgoArrowTop
            color="transparent"
            class="!w-[14px] rotate-180 duration-300 ml-[25px] !h-[7px]"
            :class="{ '!rotate-0': activeItem }"
          ></SvgoArrowTop>
        </UiButtonOpacity>
      </div>
    </UiTableCellPadding>
    <button
      v-if="!activeItem && isMobileClose"
      @click="switchItem(!activeItem)"
      class="3xl:hidden absolute w-full h-full top-0 left-0"
    ></button>
  </tr>
</template>

<style scoped></style>
