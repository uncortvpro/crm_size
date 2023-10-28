<script setup lang="ts"></script>

<template>
  <div
    class="pt-[25px] md:pt-[35px] lg:pt-[45px] xl:pt-[59px] flex flex-col gap-[25px] xl:flex-row items-center justify-between xl:items-start"
  >
    <UiDivBorderBg class="max-w-[830px]">
      <form>
        <div
          class="grid grid-cols-2 gap-x-[11px] gap-y-[15px] xl:gap-x-[40px] xl:gap-y-[20px]"
        >
          <UiHeader2 class="col-span-2"> Інформація </UiHeader2>
          <UiLabelProfile label="Ім'я">
            <UiInputProfile></UiInputProfile>
          </UiLabelProfile>
          <UiLabelProfile label="Номер телефону:">
            <UiInputProfile></UiInputProfile>
          </UiLabelProfile>

          <UiLabelProfile
            class="whitespace-nowrap truncate"
            label="Додатковий номер телефону:"
          >
            <UiInputProfile></UiInputProfile>
          </UiLabelProfile>
          <UiLabelProfile label="Email:">
            <UiInputProfile></UiInputProfile>
          </UiLabelProfile>
          <div class="col-span-2 mt-[15px]">
            <UiHeader2> Додаткова інформація </UiHeader2>
          </div>
          <UiLabelProfile label="Стать:">
            <UiSelectProfile :options="['Чоловіча', 'Жіноча']">
            </UiSelectProfile>
          </UiLabelProfile>
          <UiLabelProfile label="Дата народження:">
            <UiDatePicker></UiDatePicker>
          </UiLabelProfile>
          <UiLabelProfile label="Instagram:">
            <UiInputProfile></UiInputProfile>
          </UiLabelProfile>
          <UiLabelProfile label="Telegram:">
            <UiInputProfile></UiInputProfile>
          </UiLabelProfile>
          <UiLabelProfile class="col-span-2 self-stretch" label="Коментар:">
            <UiTextareaProfile
              class="min-h-[80px] md:min-h-[90px] xl:min-h-[105px]"
            ></UiTextareaProfile>
          </UiLabelProfile>
        </div>
      </form>
    </UiDivBorderBg>
    <UiDivBorderBg class="max-w-[527px] flex flex-col items-center">
      <UiHeader2 class="text-center">Фото</UiHeader2>
      <div
        class="w-[37%] bg-beige pt-[37%] relative rounded-[50%] overflow-hidden mt-[15px] lg:mt-[25px]"
      >
        <span class="w-full pt-[22%] absolute bottom-0 left-0 bg-beige-2 block">
          <SvgoPhoto
            color="#FFFFFF"
            class="absolute top-[50%] !w-[10%] !h-[38%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          ></SvgoPhoto>
        </span>
        <span
          class="absolute top-0 left-0 w-full h-[93%] flex items-center justify-center"
        >
          <SvgoUser
            color="#c8c8be"
            class="!fill-emerald-50 !w-[32%] !h-[32%]"
          ></SvgoUser>
        </span>
      </div>
      <UiLabelProfile
        label="Змінити статус клієнта:"
        class="self-stretch mt-[15px] lg:mt-[25px]"
      >
        <UiSelectProfile :options="['Постійний', 'Постійний']">
        </UiSelectProfile>
      </UiLabelProfile>
    </UiDivBorderBg>
  </div>
</template>

<style scoped></style>
