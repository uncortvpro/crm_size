<script setup lang="ts"></script>

<template>
  <div class="overflow-hidden">
    <CommonSectionMain
      bgBeige
      paddingContainer
      button="СПРОБУВАТИ"
      header="ІННОВАЦІЙНА CRM-СИСТЕМА ДЛЯ УПРАВЛІННЯ БІЗНЕСОМ"
      description="Управляти бізнесом стало ще простіше!"
    >
      <template #main_image>
        <img
          src="@img/main_phone.png"
          class="w-full mt-[50px] self-center xl:mt-0 xl:max-w-full col-span-4 3xl:col-span-2 3xl:ml-[-300px] 3xl:mt-[-100px] 3xl:w-[600px] 4xl:max-w-[700px] 3xl:max-w-[700px] max-w-[400px]"
          alt=""
        />
      </template>
      <template #additional_elements>
        <div class="py-[20px] md:py-[25px] xl:py-[30px] bg-beige-light">
          <Swiper
            class="swiper_main w-full max-w-[1419px]"
            :slides-per-view="4"
            :breakpoints="{
              375: {
                slidesPerView: 4,
              },
              1500: {
                slidesPerView: 6,
              },
            }"
            :spaceBetween="30"
          >
            <SwiperSlide class="!h-auto">
              <div class="h-full flex items-center">
                <img src="@img/image_1.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide class="!h-auto">
              <div class="h-full flex items-center">
                <img src="@img/image_2.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide class="!h-auto">
              <div class="h-full flex items-center">
                <img src="@img/image_3.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide class="!h-auto">
              <div class="h-full flex items-center">
                <img src="@img/image_4.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide class="!h-auto">
              <div class="h-full flex items-center">
                <img src="@img/image_5.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide class="!h-auto">
              <div class="h-full flex items-center">
                <img src="@img/image_6.png" alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </template>
    </CommonSectionMain>
    <div class="relative">
      <UiRadialGradientAbsolute
        class="right-[-10%] bottom-[-48%] hidden 2xl:block"
      ></UiRadialGradientAbsolute>
      <div class="container mt-[70px] md:mt-[100px] xl:mt-[120px]">
        <div class="max-w-[1385px] m-auto">
          <UiTitleSection class="text-center"
            >Створена для ідеального досвіду управління бізнесом</UiTitleSection
          >
          <UiTextMainPrimary class="text-center mt-[15px] xl:mt-[20px]">
            Все, що потрібно для зручного управління бізнесом ми зібрали в
            одному місці. CRM система розроблена для простоти використання,
            забезпечуючи швидку і легку інтеграцію з вашим бізнесом.
          </UiTextMainPrimary>
        </div>
      </div>
      <div class="grid grid-cols-10 grid-rows-6 xl:mt-[60px] mt-[30px]">
        <div class="col-span-3 row-span-5">
          <img
            class="w-full h-full object-cover mt-[4%] blur-[2px] drop-shadow-md"
            src="@img/tasks_section.png"
            alt=""
          />
        </div>
        <div class="col-span-4 row-span-6">
          <img
            class="w-full relative z-10 h-full object-cover object-left drop-shadow-2xl"
            src="@img/clients_section.png"
            alt=""
          />
        </div>
        <div class="col-span-3 row-span-5">
          <img
            class="w-full h-full object-cover mt-[10%] drop-shadow-md"
            src="@img/products_section.png"
            alt=""
          />
        </div>
      </div>
    </div>

    <div class="mt-[70px] md:mt-[100px] xl:mt-[130px] 3xl:mt-[160px]">
      <div class="container">
        <div class="3xl:flex">
          <div
            class="border-b-[0px] 3xl:border-b-none 3xl:pr-[60px] 4xl:pr-[85px] 3xl:border-r md:pb-[30px] pb-[20px] border-beige-1"
          >
            <UiTitleSection
              >Зробіть найкращу інвестицію в свій бізнес!</UiTitleSection
            >
            <div
              class="mt-[15px] grid lg:grid-cols-2 gap-[10px] md:gap-[15px] md:mt-[30px] xl:mt-[65px]"
            >
              <CommonItemMarkGradient
                >Оптимізація взаємодії з клієнтами</CommonItemMarkGradient
              >
              <CommonItemMarkGradient
                >Ефективне управління запасами</CommonItemMarkGradient
              >
              <CommonItemMarkGradient
                >Покращене управління продажами</CommonItemMarkGradient
              >
              <CommonItemMarkGradient
                >Автоматизовані маркетингові рішення</CommonItemMarkGradient
              >
              <CommonItemMarkGradient
                >Простота та інтуїтивний інтерфейс</CommonItemMarkGradient
              >
              <CommonItemMarkGradient
                >Захист ваших даних</CommonItemMarkGradient
              >
            </div>
          </div>
          <div
            class="pt-[20px] 3xl:pl-[30px] self-end 4xl:pl-[60px] md:pt-[30px] flex justify-center"
          >
            <div class="text-black">
              <p class="text-[35px] md:text-[55px] xl:text-[70px] font-bold">
                1000₴/<span
                  class="font-normal text-[10px] md:text-[20px] xl:text-[30px]"
                  >міс</span
                >
              </p>
              <p
                class="text-[10px] md:text-[15px] xl:text-[20px] text-center mt-[10px] md:mt-[15px] xl:mt-[20px] italic"
              >
                Єдина базова підписка
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <CommonSectionIntegrations></CommonSectionIntegrations>
  </div>
</template>

<style>
.swiper_main .swiper-wrapper {
  @apply px-[15px] 3xl:px-0;
}
</style>
