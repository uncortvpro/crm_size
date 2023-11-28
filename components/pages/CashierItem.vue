<script setup lang="ts">
defineProps<{
  allCashiers?: boolean;
  cashier: Cashier;
}>();
</script>

<template>
  <div
    class="bg-beige rounded-[10px] w-full p-[15px] pr-[40px] opacity-60 xl:pr-[52px] lg:px-[20px] text-black"
  >
    <p class="text-[11px] text-black font-medium md:text-[12px] xl:text-[15px]">
      {{ cashier?.name }}
    </p>
    <p
      class="text-[7px] md:text-[10px] mt-[5px]"
      :class="{ 'opacity-0': allCashiers }"
    >
      {{ cashier?.type }}
    </p>
    <p
      class="text-[22px] mt-[8px] xl:nt-[10px] md:text-[27px] xl:text-[30px] font-semibold"
    >
      {{ cashier?.balance }}<CommonCurrencyText />
    </p>
    <div class="mt-[12px] xl:mt-[15px] grid grid-cols-2 gap-y-[5px]">
      <p class="text-[7px] md:text-[10px]">Доходи</p>
      <p class="text-[7px] md:text-[10px]">Витрати</p>
      <p class="text-[7px] md:text-[10px] flex items-center gap-[5px]">
        <span
          class="w-[4px] inline-block h-[4px] rounded-[50%] bg-[#8ED400]"
        ></span>
        {{ cashier?.incomes }} <CommonCurrencyText />
      </p>
      <p class="text-[7px] md:text-[10px] flex items-center gap-[5px]">
        <span
          class="w-[4px] inline-block h-[4px] rounded-[50%] bg-[#E33629]"
        ></span>
        {{ cashier?.expenses }} <CommonCurrencyText />
      </p>
    </div>
  </div>
</template>

<style scoped></style>
