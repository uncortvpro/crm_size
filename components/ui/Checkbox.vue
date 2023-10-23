<script setup lang="ts">
defineProps<{
  required?: boolean;
  name?: string;
}>();
</script>

<template>
  <UCheckbox
    required
    :ui="{
      base: 'w-[11px] text-black h-[11px] lg:w-[14px] lg:h-[14px]',
      label: 'flex py-[5px] lg:py-[2px] lg:inline-block',
      required: 'hidden'
    }"
    class="gap-[3px] ms-0 items-start"
    style="color: #111111"
    :name="name"
  >
    <template #label class="ms-0">
      <UiTextPrimary
        class="text-black ml-[-10px] lg:ml-[-5px] font-normal text-[9px] lg:text-[15px]"
        ><slot
      /></UiTextPrimary>
    </template>
  </UCheckbox>
</template>
