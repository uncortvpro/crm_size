<script setup lang="ts">
const props = defineProps<{
  typeInput?: string;
}>();

const emits = defineEmits(["updateInput"]);

const file = ref(null);
const handlerChange = (value: any) => {
  file.value = value;
};
const getImageUrl = computed(() =>
  file.value ? URL.createObjectURL(file.value) : false
);

watch(
  file,
  () => {
    emits("updateInput", file.value, props?.typeInput);
  },
  { deep: true }
);
</script>

<template>
  <div
    class="w-[37%] bg-beige pt-[37%] relative rounded-[50%] overflow-hidden mt-[15px] lg:mt-[25px]"
  >
    <label class="absolute w-full inline-block h-full z-20 top-0 left-0">
      <UiInputFile
        @updateInput="handlerChange"
        class="hidden"
      />
    </label>
    <img
      v-if="getImageUrl"
      class="absolute block w-full h-full z-10 top-0 object-cover left-0"
      :src="getImageUrl"
      alt=""
    />
    <span class="w-full pt-[22%] absolute bottom-0 left-0 bg-beige-2 block">
      <SvgoPhoto
        color="#FFFFFF"
        class="absolute top-[50%] !w-[10%] !h-[38%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      ></SvgoPhoto>
    </span>
    <span
      class="absolute top-0 left-0 w-full h-[93%] flex items-center justify-center"
    >
      <SvgoUser
        color="#c8c8be"
        class="!fill-emerald-50 !w-[32%] !h-[32%]"
      ></SvgoUser>
    </span>
  </div>
</template>

<style scoped></style>
