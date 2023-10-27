<script setup lang="ts"></script>

<template>
  <Transition name="mobile-show">
    <slot />
  </Transition>
</template>

<style scoped>
.mobile-show-enter-active,
.mobile-show-leave-active {
  transition: all 0.2s;
}
.mobile-show-enter-from,
.mobile-show-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
