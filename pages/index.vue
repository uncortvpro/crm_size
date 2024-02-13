<script setup lang="ts"></script>

<template>
  <div class="overflow-hidden">
    <CommonSectionMain
      bgBeige
      paddingContainer
      bgContainerOverflowHidden
      button="СПРОБУВАТИ"
      header="CRM-СИСТЕМА ДЛЯ РОБОТИ У СФЕРІ ОДЯГУ"
      description="Ще не втомились від EXCEL?"
    >
      <template #main_image>
        <img
          src="@img/main_phone.png"
          class="w-full mt-[50px] self-center xl:mt-0 xl:max-w-full col-span-4 3xl:col-span-2 3xl:ml-[-300px] 3xl:mt-[-100px] 3xl:w-[600px] 4xl:max-w-[500px] 3xl:max-w-[500px] max-w-[400px]"
          alt=""
        />
      </template>
      <template #additional_elements>
        <div class="py-[20px] md:py-[25px] xl:py-[30px] bg-beige-light">
          <Swiper
            class="swiper_main w-full max-w-[1419px]"
            :slides-per-view="'auto'"
            :centered-slides="true"
            :centered-slides-bounds="true"
            :spaceBetween="30"
            :breakpoints="{
              375: {
                spaceBetween: 30,
              },
              768: {
                spaceBetween: 50,
              },
              992: {
                spaceBetween: 100,
              },
              1500: {
                spaceBetween: 100,
              },
            }"
          >
            <SwiperSlide v-for="item in 6" class="!h-auto !w-[20%] lg:!w-fit">
              <div class="h-full flex justify-center items-center">
                <!-- <img src="@img/alnest.png" class="opa" alt="" /> -->
              </div>
            </SwiperSlide>
            <!-- <SwiperSlide class="!h-auto !w-[20%] lg:!w-fit">
              <div class="h-full flex justify-center items-center">
                <img src="@img/novitska.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide class="!h-auto !w-[20%] lg:!w-fit">
              <div class="h-full flex justify-center items-center">
                <img src="@img/brend_comission.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide class="!h-auto !w-[10%] lg:!w-fit">
              <div class="h-full flex justify-center items-center">
                <img src="@img/image_1.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide class="!h-auto !w-[20%] lg:!w-fit">
              <div class="h-full flex justify-center items-center">
                <img src="@img/di_forte.png" alt="" />
              </div>
            </SwiperSlide> -->
          </Swiper>
        </div>
      </template>
    </CommonSectionMain>
    <div class="relative">
      <UiRadialGradientAbsolute
        class="right-[-10%] bottom-[-48%] -z-10 hidden 2xl:block"
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
            class="w-full h-full object-cover rounded-[10px] xl:rounded-[20px] mt-[4%] blur-[2px] shadow-md"
            src="@img/tasks_section.png"
            alt=""
          />
        </div>
        <div class="col-span-4 row-span-6">
          <img
            class="w-full relative z-10 h-full object-cover rounded-[10px] xl:rounded-[20px] object-left shadow-2xl"
            src="@img/clients_section.png"
            alt=""
          />
        </div>
        <div class="col-span-3 row-span-5">
          <img
            class="w-full h-full object-cover mt-[10%] rounded-[10px] xl:rounded-[20px] shadow-md"
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
            class="pt-[20px] md:pt-[30px] self-center flex flex-1 justify-center"
          >
            <div class="text-black">
              <p class="text-[40px] md:text-[60px] xl:text-[80px] font-black">
                1500₴/<span
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
