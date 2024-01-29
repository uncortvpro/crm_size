<script setup lang="ts">
const router = useRouter();

const onClickBack = () => {
  router.go(-1);
};
</script>

<template>
  <UiButtonOpacity @click="onClickBack" class="flex items-center gap-[10px]">
    <SvgoArrowRight class="rotate-180 !m-0 stroke-beige-1"></SvgoArrowRight>
    <span class="font-medium text-[11px] xl:text-[15px] text-beige-1">
      Повернутися</span
    >
  </UiButtonOpacity>
</template>

<style scoped></style>
