<script setup lang="ts">
defineProps<{
  modelValue: any;
}>();
const emits = defineEmits(["updateInput", "update:modelValue"]);
const image = ref();
const base64Image = ref();

const updateImage = () => {
  const reader = new FileReader();
  reader.onload = () => {
    const base64 =
      typeof reader.result === "string" ? reader.result?.split(",")[1] : "";
    base64Image.value = base64;
    emits("update:modelValue", base64Image.value);
  };

  reader.readAsDataURL(image.value);
};

watch(image, () => {
  updateImage();
});
</script>

<template>
  <UiInputImage v-model="image">
    <template #input_box="{ image, updateInput }">
      <div
        class="relative w-[100px] h-[100px] 2xl:w-[110px] 2xl:h-[110px] overflow-hidden rounded-[3px] bg-beige md:rounded-[3px]"
      >
        <label class="absolute left-0 top-0 z-10 h-full w-full cursor-pointer">
          <UiInputFile class="hidden" @updateInput="updateInput" />
        </label>
        <img
          v-if="modelValue"
          class="absolute block w-full h-full z-10 top-0 object-cover left-0"
          :src="useBase64(modelValue)"
          alt=""
        />
        <div
          class="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-[5px] xl:gap-[10px]"
        >
          <span
            class="relative h-[12px] w-[12px] before:absolute before:inset-0 before:m-auto before:h-[100%] before:w-[1px] before:bg-beige-1 after:absolute after:inset-0 after:m-auto after:h-[100%] after:w-[1px] after:rotate-[90deg] after:bg-beige-1 md:h-[16px] md:w-[16px] xl:h-[20px] xl:w-[20px]"
          />
        </div>
      </div>
    </template>
  </UiInputImage>
</template>

<style scoped></style>
