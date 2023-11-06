<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps<{
  placeholder?: string;
  type: any;
  inputType: string;
}>();

const emits = defineEmits(["changeValue"]);

const value = ref("");

watch(value, () => {
  emits("changeValue", props.inputType, value);
});
</script>

<template>
  <label class="flex flex-col gap-[5px]" for="">
    <UiTextPrimary><slot /></UiTextPrimary>

    <UiInputPrimary
      v-model="value"
      :placeholder="placeholder"
      :type="type"
    ></UiInputPrimary>
  </label>
</template>

<style scoped></style>
