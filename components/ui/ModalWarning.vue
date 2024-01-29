<script setup lang="ts">
defineProps<{
  ui?: object;
}>();

const emits = defineEmits(["closeModal", "confirm"]);

const closeModal = () => {
  emits("closeModal");
};

const confirm = () => {
  emits("confirm");
};
</script>

<template>
  <UiModal :ui="{ ...ui, width: '!max-w-[414px]' }">
    <div class="flex flex-col items-center">
      <div
        class="border-danger border w-[20px] h-[20px] md:w-[30px] md:h-[30px] text-danger text-[15px] flex items-center justify-center rounded-[50%]"
      >
        <span>!</span>
      </div>
      <p
        class="font-medium mt-[15px] md:mt-[15px] text-center text-[15px] md:text-[20px]"
      >
        <slot />
      </p>
      <div class="flex self-stretch gap-[20px] justify-center mt-[20px]">
        <UiButtonOpacityBorder @click="confirm" class="w-full max-w-[115px]"
          >Так</UiButtonOpacityBorder
        >
        <UiButtonOpacityBorder
          @click="closeModal"
          class="bg-black w-full max-w-[115px] text-white hover:text-black hover:bg-transparent hover:!opacity-100"
          >Ні
        </UiButtonOpacityBorder>
      </div>
    </div>
  </UiModal>
</template>

<style scoped></style>
