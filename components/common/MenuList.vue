<script setup lang="ts">
defineProps<{
  isActive: boolean;
}>();
</script>
<template>
  <div
    class="items-center hidden justify-between w-full lg:flex lg:w-auto lg:order-1"
    :class="{ '!block': isActive }"
  >
    <Transition name="page">
      <div
        v-if="isActive"
        class="fixed w-full h-full lg:hidden bg-dark-transparent z-10 left-0"
      ></div>
    </Transition>
    <Transition name="page">
      <ul
        class="flex bg-white flex-col rounded-b-[3px] text-center mx-[-15px] gap-[26px] relative z-[15] py-4 lg:py-0 font-medium lg:flex-row lg:space-x-8 lg:mt-0"
        :class="{flex: isActive}"
        >
        <li>
          <CommonMenuLink to="/">МОЖЛИВОСТІ</CommonMenuLink>
        </li>
        <li>
          <CommonMenuLink to="/">БЛОГ</CommonMenuLink>
        </li>
        <li>
          <CommonMenuLink to="/">КОНТАКТИ</CommonMenuLink>
        </li>
        <li>
          <UiButtonTransparent class="lg:hidden !px-[0px]">РЕЄСТРАЦІЯ</UiButtonTransparent>
        </li>
      </ul>
    </Transition>
  </div>
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

</style>
