<script setup lang="ts"></script>

<template>
  <LayoutProfilePage title="Додати клієнта">
    <template #header>
      <UiButtonOpacityBorder disabled class="hidden lg:block">
        Створити
      </UiButtonOpacityBorder>
    </template>
    <template #content>
      <LayoutClient></LayoutClient>
      <div class="flex justify-center">
        <UiButtonOpacityBorder disabled class="lg:hidden">
          Створити
        </UiButtonOpacityBorder>
      </div>
    </template>
  </LayoutProfilePage>
</template>

<style scoped></style>
