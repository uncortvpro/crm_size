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
        class="relative w-[31px] h-[31px] overflow-hidden rounded-[3px] bg-beige md:rounded-[3px]"
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
          <SvgoAddImage class="text-beige-2"></SvgoAddImage>
        </div>
      </div>
    </template>
  </UiInputImage>
</template>

<style scoped></style>
