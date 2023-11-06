<script setup lang="ts">
defineProps<{
  isOpen?: boolean;
  ui?: any;
  label: string;
}>();

const emits = defineEmits(["closeModal"]);

const closeModal = () => {
  emits("closeModal");
};
</script>

<template>
  <UiModal
    :ui="{
      ...ui,
    }"
  >
    <UCard
      :ui="{
        ring: 'ring-0',
        shadow: 'shadow-none',
        divide: 'divide-none',
        body: { base: 'hidden' },
      }"
    >
      <template #header>
        <div class="flex items-center justify-between">
          <UiHeader2>{{ label }}</UiHeader2>
          <UiButtonOpacityClose @click="closeModal"></UiButtonOpacityClose>
        </div>
      </template>
      <!-- <Placeholder class="h-32" /> -->
    </UCard>
    <slot />
  </UiModal>
</template>

<style scoped></style>
