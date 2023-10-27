<script setup lang="ts"></script>

<template>
  <UiTableCellPadding class="grid grid-cols-2  3xl:table-cell">
    <UiTableText class="3xl:hidden"><slot name="title" /></UiTableText>
    <UiTableText class="= truncate"><slot name="value" /></UiTableText>
  </UiTableCellPadding>
</template>

<style scoped></style>
