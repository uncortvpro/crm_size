<script setup lang="ts"></script>

<template>
  <div class="">
    <CommonSectionMain
      paddingY
      button="СПРОБУВАТИ"
      header="ПРОСТІШЕ НЕ ПРИДУМАЄШ"
      description="CRM-система, в якій все просто і зрозуміло!"
    >
      <template #main_image>
        <img
          src="@img/two_mobile.png"
          class="w-full mt-[50px] self-center z-10 xl:mt-0 xl:max-w-full col-span-4 3xl:col-span-2 3xl:ml-[-250px] 3xl:mt-[-100px] 3xl:w-[500px] 4xl:ml-[-300px] 4xl:w-[600px] 3xl:max-w-[700px] max-w-[400px]"
          alt=""
        />
        <UiRadialGradientAbsolute
          class="bottom-[20%] md:bottom-[10%] left-0 right-0 m-auto xl:bottom-[0%] xl:left-auto"
        ></UiRadialGradientAbsolute>
      </template>
    </CommonSectionMain>
    <div class="">
      <div class="container flex flex-col">
        <UiTitleSection class="text-center">Як це працює</UiTitleSection>
        <div
          class="mt-[51px] xl:[60px] flex flex-col gap-[35px] md:gap-[40px] xl:gap-[50px]"
        >
          <PagesItemHowThisWork leftImage></PagesItemHowThisWork>
          <PagesItemHowThisWork></PagesItemHowThisWork>
          <PagesItemHowThisWork leftImage></PagesItemHowThisWork>
          <PagesItemHowThisWork></PagesItemHowThisWork>
        </div>
        <UiButtonPrimary class="mt-[40px] self-center md:mt-[60px] xl:mt-[80px]"
          >СПРОБУВАТИ</UiButtonPrimary
        >
      </div>
    </div>
    <CommonSectionIntegrations></CommonSectionIntegrations>
  </div>
</template>

<style scoped></style>
