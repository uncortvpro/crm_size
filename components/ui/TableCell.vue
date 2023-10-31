<script setup lang="ts"></script>

<template>
  <UiTableCellPadding class="grid grid-cols-2  3xl:table-cell 3xl: col-span-2">
    <UiTableText class="3xl:hidden "><slot name="title" /></UiTableText>
    <UiTableText><slot name="value" /></UiTableText>
  </UiTableCellPadding>
</template>

<style scoped></style>
