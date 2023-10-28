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
      <UiButtonOpacityBorder disabled class="lg:hidden">
        Створити
      </UiButtonOpacityBorder>
    </template>
  </LayoutProfilePage>
</template>

<style scoped></style>
