<script setup lang="ts">
const props = defineProps<{
  allCashiers?: boolean;
  cashier: Cashier;
}>();

const emits = defineEmits(["successDelete"]);

const successDelete = () => {
  emits("successDelete");
};

const deleteCashier = () => {
  useAuthFetch(`${useApiUrl()}/delete_cashier`, {
    body: {
      cashier_id: props.cashier._id,
    },
  }).then((res) => {
    if (res.message) {
      successDelete();
    }
  });
};
</script>

<template>
  <div
    :class="
      cn(
        'bg-beige relative group rounded-[10px] w-full p-[15px] hover:opacity-100 duration-hover pr-[40px] opacity-60 xl:pr-[52px] lg:px-[20px] text-black',
        {
          'opacity-60': !allCashiers,
        }
      )
    "
  >
    <UiButtonOpacity
      @click="deleteCashier"
      v-if="!allCashiers"
      class="absolute is-hover:opacity-0 group-hover:opacity-100 duration-hover w-[14px] h-[14px] right-[10%]"
    >
      <span
        class="w-full h-[1px] md:h-[2px] bg-beige-2 block rotate-[45deg] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
      ></span>
      <span
        class="w-full h-[1px] md:h-[2px] bg-beige-2 block rotate-[-45deg] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
      ></span>
    </UiButtonOpacity>
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
