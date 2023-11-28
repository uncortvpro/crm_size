<script setup lang="ts">
const cashiers = ref<Cashier[]>([]);
const totalBalance = ref<Cashier["balance"]>(0);
const totalExpenses = ref<Cashier["expenses"]>(0);
const totalIncomes = ref<Cashier["incomes"]>(0);

const fetchCashiers = () => {
  useAuthFetch(`${useApiUrl()}/cashiers`).then((res) => {
    console.log(res);
    cashiers.value = res.cashiers;
  });
};

fetchCashiers();
</script>

<template>
  <div class="mb-[25px] xl:mb-[31px]">
    <Swiper
      class="swiper_cashiers w-full"
      :modules="[SwiperFreeMode]"
      :spaceBetween="30"
      :slidesPerView="'auto'"
      :breakpoints="{
        320: {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 2,
        },
        1100: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 5,
        },
        1600: {
          slidesPerView: 6,
        },
        1800: {
          slidesPerView: 7,
        },
      }"
    >
      <SwiperSlide class="!h-auto">
        <PagesCashierItem
          class="border-beige-1 border-[2px] h-full !opacity-100"
          allCashiers
          :cashier="{
            type: 'Г',
            balance: totalBalance,
            expenses: totalExpenses,
            incomes: totalIncomes,
            name: 'Всі каси',
          }"
        ></PagesCashierItem>
      </SwiperSlide>

      <SwiperSlide
        v-for="cashier in cashiers"
        :key="cashier._id"
        class="!h-auto"
      >
        <PagesCashierItem
          class="border-beige-1 h-full border-[2px] !opacity-100"
          :cashier="cashier"
        ></PagesCashierItem>
      </SwiperSlide>

      <SwiperSlide class="!h-auto">
        <PagesButtonAddCashier class="h-full"></PagesButtonAddCashier>
      </SwiperSlide>
    </Swiper>

    <!-- <div
      class=" flex items-center gap-[10px] md:gap-[20px] xl:gap-[30px]"
    >
      <PagesCashierItem
        class="border-beige-1 border-[2px] !opacity-100"
        allCashiers
        :cashier="{
          type: 'Г',
          balance: totalBalance,
          expenses: totalExpenses,
          incomes: totalIncomes,
          name: 'Всі каси',
        }"
      ></PagesCashierItem>

      <PagesCashierItem
        v-for="cashier in cashiers"
        :key="cashier._id"
        :cashier="cashier"
      ></PagesCashierItem>
      <button
        class="bg-beige rounded-[10px] px-[42px] xl:px-[59px] flex flex-col items-center justify-center gap-[5px] p-[15px] self-stretch pr-[40px] opacity-60 xl:pr-[52px] lg:px-[20px] text-black w-fit"
      >
        <SvgoCross
          class="!w-[21px] !h-[21px] xl:!w-[31px] xl:!h-[31px] stroke-beige-2"
        ></SvgoCross>
        <p
          class="text-[11px] text-black font-medium md:text-[12px] xl:text-[15px]"
        >
          Додати касу
        </p>
      </button>
    </div> -->
  </div>
</template>

<style>
.swiper_cashiers .swiper-slide {
  /* @apply !w-[160px] md:!w-[200px] xl:!w-[250px]; */
}
</style>
