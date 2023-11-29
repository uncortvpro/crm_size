<script setup lang="ts"></script>

<template>
  <footer
    class="pt-[25px] pb-[32px] mt-[70px] md:mt-[100px] rounded-t-[20px] xl:mt-[156px] bg-beige md:pt-[35px] xl:pt-[45px] md:pb-[60px] xl:pb-[80px] 3xl:pb-[121px]"
  >
    <div class="container">
      <div class="grid grid-cols-2">
        <div>
          <CommonLogo></CommonLogo>
          <PagesFooterText
            class="text-[7px] max-w-[561px] mt-[5px] leading-[120%] md:mt-[10px] xl:mt-[15px] text-black md:text-[12px] xl:text-[16px] 3xl:text-[20px]"
          >
            Ми поєднали в цій CRM найкраще, щоб спростити ваш досвід управління
            бізнесом. Зручність, простота використання, доступність.
            Приєднуйтесь вже зараз!
          </PagesFooterText>
        </div>
        <div class="justify-self-end flex flex-col gap-[10px] md:gap-[15px]">
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
            href="tel:+380739430270"
          >
            <SvgoPhone
              class="!w-[14px] !h-[11px] xl:!w-[25px] xl:!h-[20px]"
            ></SvgoPhone>
            <PagesFooterText> +380 73 943 02 70</PagesFooterText></a
          >
          <div class="flex gap-[15px] xl:gap-[20px] md:mt-[10px]">
            <UiButtonOpacity
              class="rounded-[50%] flex justify-center bg-beige-1 items-center w-[27px] h-[27px] md:w-[37px] md:h-[37px] xl:w-[50px] xl:h-[50px]"
            >
              <SvgoTelegram class="!w-[40%] !h-[40%]"></SvgoTelegram>
            </UiButtonOpacity>
            <UiButtonOpacity
              class="rounded-[50%] flex justify-center bg-beige-1 items-center w-[27px] h-[27px] md:w-[37px] md:h-[37px] xl:w-[50px] xl:h-[50px]"
            >
              <SvgoInstagram class="!w-[40%] !h-[40%]"></SvgoInstagram>
            </UiButtonOpacity>
          </div>
        </div>
        <div
          class="mt-[85px] xl:mt-[53px] col-span-2 flex justify-between sm:justify-end sm:gap-[50px] xl:gap-[80px]"
        >
          <PagesFooterMenuItem to="/">ГОЛОВНА</PagesFooterMenuItem>
          <PagesFooterMenuItem to="/opportunities">МОЖЛИВОСТІ</PagesFooterMenuItem>
          <PagesFooterMenuItem to="/contacts">КОНТАКТИ</PagesFooterMenuItem>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
