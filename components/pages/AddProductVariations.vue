<script setup lang="ts">
const props = defineProps<{
  modelValue: VariationProduct[];
}>();
const emits = defineEmits(["update:modelValue"]);

const variation = ref({
  sizes: [
    {
      value: "",
    },
  ],
  colors: [
    {
      value: "",
    },
  ],
});

const onAddOption = (type: "sizes" | "colors") => {
  variation.value[type].push({
    value: "",
  });
};

const onCreateVariations = () => {
  const variations: VariationProduct[] = [];
  for (let size of variation.value.sizes) {
    for (let color of variation.value.colors) {
      variations.push({
        size: size.value,
        colour: color.value,
        price: "0",
        in_stock: "0",
        photos: "",
        cost_price: "0",
      });
    }
  }

  emits("update:modelValue", [...props.modelValue, ...variations]);
  variation.value.colors = [
    {
      value: "",
    },
  ];
  variation.value.sizes = [
    {
      value: "",
    },
  ];
};
</script>

<template>
  <UiDivBorderBg>
    <UiHeader2 class="text-center">Варіації</UiHeader2>
    <form action="#" @submit.prevent="onCreateVariations">
      <div class="flex flex-col">
        <div>
          <UiLabelProfile label="Назва варіації:">
            <UiInputProfile value="Розмір" readonly class=""></UiInputProfile>
          </UiLabelProfile>
          <UiLabelProfile class="mt-[10px]" label="Опції:">
            <UiInputProfile
              required
              v-for="(size, index) in variation.sizes"
              :key="index"
              v-model="size.value"
              class=""
            ></UiInputProfile>
          </UiLabelProfile>
          <UiButtonTextAdding
            @click="onAddOption('sizes')"
            class="mt-[10px] xl:mt-[15px]"
            >Додати нову опцію</UiButtonTextAdding
          >
        </div>
        <div class="mt-[15px] md:mt-[20px] xl:mt-[25px]">
          <UiLabelProfile label="Назва варіації:">
            <UiInputProfile value="Колір" readonly class=""></UiInputProfile>
          </UiLabelProfile>
          <UiLabelProfile class="mt-[10px]" label="Опції:">
            <UiInputProfile
              required
              v-for="(color, index) in variation.colors"
              :key="index"
              v-model="color.value"
              class=""
            ></UiInputProfile>
          </UiLabelProfile>
          <UiButtonTextAdding
            @click="onAddOption('colors')"
            class="mt-[10px] xl:mt-[15px]"
            >Додати нову опцію</UiButtonTextAdding
          >
        </div>
        <UiButtonOpacityBorder
          type="submit"
          class="self-center mt-[25px] md:mt-[35px] 2xl:mt-[44px]"
          >Зберегти зміни</UiButtonOpacityBorder
        >
      </div>
    </form>
  </UiDivBorderBg>
</template>

<style scoped></style>
