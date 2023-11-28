<script setup lang="ts"></script>

<template>
  <main class="mt-[20px]">
    <UiRadialGradientAbsolute
      class="bottom-[10%] !w-[300px] !h-[300px] md:!w-[500px] md:!h-[500px] xl:!h-[800px] xl:!w-[800px] !pt-0 left-[-10%] top-[5%] z-[-1]"
    ></UiRadialGradientAbsolute>
    <div class="container">
      <div :class="cn(' rounded-[20px]')">
        <div
          :class="'relative flex gap-[30px] xl:flex-row flex-col justify-between xl:pt-[110px] 3xl:pt-[200px] pb-[100px] md:pb-[110px]'"
        >
          <div class="max-w-[650px] text-black col-span-6">
            <h2
              class="uppercase text-[30px] font-bold md:text-[45px] 3xl:text-[65px]"
            >
              КОНТАКТИ
            </h2>
            <UiTextMainPrimary
              class="text-[15px] mt-[30px] md:mt-[40px] xl:mt-[60px] font-medium md:text-[20px] xl:text-[25px]"
            >
              Якщо виникли проблеми в роботі з системою зверніться до нас
              будь-яким зручним способом:
            </UiTextMainPrimary>
            <div
              class="flex flex-col gap-[8px] md:gap-[12px] xl:gap-[20px] mt-[15px] md:mt-[25px] xl:mt-[40px]"
            >
              <a
                class="flex gap-[5px] md:gap-[10px] xl:gap-[15px] items-center"
                href="mailto:info@sizecrm.com.ua"
              >
                <SvgoMail
                  class="!w-[14px] !h-[11px] xl:!w-[25px] xl:!h-[20px]"
                ></SvgoMail>
                <PagesFooterText>info@sizecrm.com.ua</PagesFooterText>
              </a>
              <a
                class="flex gap-[5px] md:gap-[10px] xl:gap-[15px] items-center"
                href="mailto:info@sizecrm.com.ua"
              >
                <SvgoTelegram
                  class="!w-[14px] !h-[11px] xl:!w-[25px] xl:!h-[20px]"
                ></SvgoTelegram>
                <PagesFooterText>@sizecrm</PagesFooterText>
              </a>
              <a
                class="flex gap-[5px] md:gap-[10px] xl:gap-[15px] items-center"
                href="mailto:info@sizecrm.com.ua"
              >
                <SvgoInstagram
                  class="!w-[14px] !h-[11px] xl:!w-[25px] xl:!h-[20px]"
                ></SvgoInstagram>
                <PagesFooterText>sizecrm.com.ua</PagesFooterText>
              </a>
              <a
                class="flex gap-[5px] md:gap-[10px] xl:gap-[15px] items-center"
                href="tel:+380739430270"
              >
                <SvgoPhone
                  class="!w-[14px] !h-[11px] xl:!w-[25px] xl:!h-[20px]"
                ></SvgoPhone>
                <PagesFooterText> +380 73 943 02 70</PagesFooterText></a
              >
            </div>
          </div>
          <UiDivBorderBg
            class="col-span-6 max-w-[550px] xl:max-w-[667px] self-center !bg-beige xl:self-start !py-[30px] !px-[20px] md:!px-[83px] md:!py-[40px]"
          >
            <UiTitleSection
              class="text-center mb-[25px] md:mb-[30px] xl:mb-[37px] !text-[13px] md:!text-[20px] 3xl:!text-[30px]"
              >Залиште свої контакти і ми звʼяжемося з вами самі</UiTitleSection
            >
            <form action="#">
              <div class="flex flex-col">
                <div
                  class="flex flex-col gap-[12px] md:gap-[16px] xl:gap-[20px]"
                >
                  <UiLabelProfile label="Введіть повне ім’я:">
                    <input
                      type="text"
                      class="rounded-[5px] h-[31px] md:h-[40px] xl:h-[60px] border border-beige-1 bg-transparent"
                    />
                  </UiLabelProfile>
                  <UiLabelProfile label="Введіть email або номер телефону:">
                    <input
                      type="text"
                      class="rounded-[5px] h-[31px] md:h-[40px] xl:h-[60px] border border-beige-1 bg-transparent"
                    />
                  </UiLabelProfile>
                  <UiLabelProfile label="Ваше повідомлення:">
                    <textarea
                      class="rounded-[5px] h-[120px] p-[7px] md:h-[130px] xl:h-[140px] resize-none border border-beige-1 bg-transparent"
                    ></textarea>
                  </UiLabelProfile>
                </div>
                <UiButtonPrimary class="self-center mt-[35px]"
                  >ВІДПРАВИТИ</UiButtonPrimary
                >
              </div>
            </form>
          </UiDivBorderBg>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
