<script setup lang="ts">
const props = defineProps<{
  options: any;
  valueSelect?: string;
  placeholder?: string;
}>();
const open = ref(false);
const onSwitch = (value: boolean) => {
  open.value = value;
};
</script>

<template>
  <USelectMenu
    :options="options"
    variant="none"
    @open="onSwitch(true)"
    @close="onSwitch(false)"
    class="!bg-red"
    :uiMenu="{
      base: 'bg-beige !p-0 shadow-none !rounded-[3px]',
      option: {
        base: 'bg-beige rounded-none hover:bg-beige-1 py-[7px] md:py-[10px] text-[9px] md:text-[12px]',
        active: 'bg-beige-1',
        selectedIcon: {
          base: 'hidden',
        },
      },
    }"
  >
    <UiButtonIconProfile :value="valueSelect || placeholder || ''" :open="open">
      <UIcon
        name="i-heroicons-chevron-right-20-solid"
        class="transition-transform rotate-90 w-[20px] h-[20px]"
        :class="[open && 'transform rotate-[270deg]']"
      />
    </UiButtonIconProfile>
  </USelectMenu>
</template>

<style scoped></style>
