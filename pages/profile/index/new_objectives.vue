<script setup lang="ts">
const error = ref("");
const messageToUser = ref("");
</script>

<template>
  <LayoutProfilePage title="Додати завдання">
    <template #header>
      <UiButtonOpacityBorder @click="" class="hidden lg:block">
        Створити
      </UiButtonOpacityBorder>
    </template>
    <template #content>
      <UiAlertDanger v-if="error">{{ error }}</UiAlertDanger>
      <UiAlertSuccess v-if="messageToUser">{{ messageToUser }}</UiAlertSuccess>
      <form action="#">
        <UiDivBorderBg class="w-full max-w-[1008px]">
          <UiDivGridForm>
            <UiHeader2 class="col-span-2"> Інформація про завдання </UiHeader2>
            <UiLabelProfile class="col-span-2 md:col-span-1" label="Заголовок:">
              <UiInputProfile></UiInputProfile>
            </UiLabelProfile>
            <UiLabelProfile
              class="row-span-2 col-span-2 md:col-span-1"
              label="Опис завдання:"
            >
              <UiTextareaProfile
                class="min-h-[80px] md:min-h-[120px] xl:min-h-[270px]"
              ></UiTextareaProfile>
            </UiLabelProfile>
            <UiLabelProfile label="Додайте учасників:">
              <div>Додайте учасників</div>
            </UiLabelProfile>
            <UiHeader2 class="col-span-2"> Додаткова інформація </UiHeader2>
            <UiLabelProfile
              class="col-span-2 md:col-span-1"
              label="Відповідальна особа:"
            >
              <UiSelectProfile></UiSelectProfile>
            </UiLabelProfile>
            <UiLabelProfile class="col-span-2 md:col-span-1" label="Дедлайн:">
              <UiDatePicker></UiDatePicker>
            </UiLabelProfile>
            <UiLabelProfile
              class="col-span-2 md:col-span-1"
              label="Змінити статус завдання:"
            >
              <UiSelectProfile></UiSelectProfile>
            </UiLabelProfile>
            <UiLabelProfile class="col-span-2 md:col-span-1" label="Коментар:">
              <UiTextareaProfile
                class="min-h-[80px] md:min-h-[120px]"
              ></UiTextareaProfile>
            </UiLabelProfile>
          </UiDivGridForm>
        </UiDivBorderBg>
      </form>
      <div class="flex justify-center">
        <UiButtonOpacityBorder disabled class="lg:hidden mt-[25px]">
          Створити
        </UiButtonOpacityBorder>
      </div>
    </template>
  </LayoutProfilePage>
</template>

<style scoped></style>
