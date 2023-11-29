<script setup lang="ts">
const cashiers = ref<Cashier[]>([]);
const totalBalance = ref<Cashier["balance"]>(0);
const totalExpenses = ref<Cashier["expenses"]>(0);
const totalIncomes = ref<Cashier["incomes"]>(0);

const isAddCashierModal = ref(false);

const switchModalAddCashier = (value: boolean) => {
  isAddCashierModal.value = value;
};

const fetchCashiers = () => {
  useAuthFetch(`${useApiUrl()}/cashiers`).then((res) => {
    console.log(res);
    cashiers.value = res.cashiers;
    totalBalance.value = res.total_balance;
    totalExpenses.value = res.total_expenses;
    totalIncomes.value = res.total_incomes;
  });
};

const successAddCashier = () => {
  switchModalAddCashier(false);
  fetchCashiers();
};

fetchCashiers();
</script>

<template>
  <div class="mb-[25px] xl:mb-[31px]">
    <CommonModalAddCashier
      @successAction="successAddCashier"
      v-model="isAddCashierModal"
    ></CommonModalAddCashier>
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
            balance: totalBalance,
            expenses: totalExpenses,
            incomes: totalIncomes,
            name: 'Всі каси',
            type: 'Готівкова',
          }"
        ></PagesCashierItem>
      </SwiperSlide>

      <SwiperSlide
        v-for="cashier in cashiers"
        :key="cashier._id"
        class="!h-auto"
      >
        <PagesCashierItem
          @successDelete="fetchCashiers"
          class="h-full"
          :cashier="cashier"
        ></PagesCashierItem>
      </SwiperSlide>

      <SwiperSlide class="!h-auto">
        <PagesButtonAddCashier
          @click="switchModalAddCashier(true)"
          class="h-full"
        ></PagesButtonAddCashier>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style></style>
