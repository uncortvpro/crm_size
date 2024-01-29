<script setup lang="ts">
const props = defineProps<{
  options: SelectOption[];
  modelValue?: any;
  error?: boolean;
}>();

const emits = defineEmits(["update:modelValue"]);

const handleInput = (value: string) => {
  emits("update:modelValue", value);
};

const currentValue = computed(() =>
  props.options.find((el) => el.id === props.modelValue)
);
2;
</script>

<template>
  <div
    :class="
      cn(
        'relative flex w-fit overflow-hidden rounded-[3px] border border-black md:rounded-[7px] xl:rounded-[5px]',
        {
          '!border-status_red': error,
        }
      )
    "
  >
    <span
      :class="
        cn(
          'absolute top-0 h-full text_xs z-10 px-[9px] text-transparent py-[5px] text-black md:px-[10px]  xl:px-[12px] rounded-[2px] bg-black duration-200 md:rounded-[5px] xl:rounded-[3px]',
          {
            'right-0': modelValue === options[1].id,
          }
        )
      "
      >{{ currentValue?.title }}</span
    >
    <UiButton
      v-for="option in options"
      :key="option.id"
      :class="
        cn(
          'text_xs relative z-10 px-[9px] py-[5px] text-black md:px-[10px] md:py-[8px] xl:px-[12px] xl:py-[10px]',
          {
            'text-white': modelValue === option.id,
          }
        )
      "
      @click="handleInput(option.id)"
    >
      {{ option.title }}
    </UiButton>
  </div>
</template>

<style scoped></style>
