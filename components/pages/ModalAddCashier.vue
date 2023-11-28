<script setup lang="ts"></script>

<template>
  <UiModalTitle
    :ui="{ width: 'w-[414px]' }"
    title="Додати касу"
  >
    <div class="flex flex-col pt-[15px] xl:pt-[20px]">
      <UiLabelProfile label="Введіть назву:">
        <UiInputProfile></UiInputProfile>
      </UiLabelProfile>

      <UiLabelProfile class="pt-[15px] xl:pt-[20px]" label="Оберіть категорію:">
        <div class="flex items-center gap-[20px] pt-[10px]">
          <UiRadio label="Готівкова"></UiRadio>
          <UiRadio label="Безготівкова"></UiRadio>
        </div>
      </UiLabelProfile>

      <UiButtonOpacityBorder class="mt-[20px] xl:mt-[30px] self-center w-fit"
        >Зберегти</UiButtonOpacityBorder
      >
    </div>
  </UiModalTitle>
</template>

<style scoped></style>
