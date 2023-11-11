<script setup lang="ts">
defineProps<{
  name: string;
  email: string;
  checked: boolean;
}>();
</script>

<template>
  <button class="flex items-center gap-[7px] justify-between">
    <div class="flex items-center gap-[7px]">
      <CommonParticipantItem class="flex-shrink-0" :name="name">
      </CommonParticipantItem>
      <p class="whitespace-nowrap truncate">
        <span class="text-[12px] text-black">{{ name }}</span>
        <span class="text-[12px] text-black"> ({{ email }})</span>
      </p>
    </div>
    <SvgoCheckMark v-if="checked" class="!text-transparent stroke-beige-1"></SvgoCheckMark>
  </button>
</template>

<style scoped></style>
