<script setup lang="ts">
defineProps<{
  leftImage?: boolean;
  item: any;
}>();
</script>

<template>
  <div class="grid gap-[15px] md:gap-[25px] xl:gap-[70px] md:grid-cols-2">
    <div
      :class="
        cn('', {
          'md:order-2': leftImage,
        })
      "
    >
      <CommonItemMarkGradient
        :markValue="item.number"
        markStyles="flex items-center justify-center text-[17px] md:text-[28px] xl:text-[40px] font-semibold !w-[27px] !h-[27px] md:!w-[45px] md:!h-[45px] xl:!w-[70px] xl:!h-[70px]"
        >{{ item.title }}</CommonItemMarkGradient
      >
      <UiTextMainPrimary
        class="mt-[10px] md:leading-[150%] md:!text-[16px] 2xl:!text-[25px] md:mt-[20px] xl:mt-[40px]"
        >{{ item.description }}</UiTextMainPrimary
      >
    </div>
    <img
      :class="cn('rounded-[20px] drop-shadow-xl')"
      :src="item.image"
      alt=""
    />
  </div>
</template>

<style scoped></style>
