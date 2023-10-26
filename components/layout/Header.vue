<script setup lang="ts"></script>

<template>
  <header class="container">
    <nav class="bg-white dark:bg-gray-900 w-full z-20">
      <div class="flex bg-white z-20 flex-wrap items-center justify-between mx-auto py-4">
        <CommonLogo
          href="https://flowbite.com/"
          class="flex relative bg-white z-20 items-center"
        ></CommonLogo>
        <div class="flex relative z-20 lg:order-2">
          <slot name="header-items"></slot>
        </div>
        <slot name="header-menu-list"></slot>
      </div>
    </nav>
  </header>
</template>

<style scoped></style>
