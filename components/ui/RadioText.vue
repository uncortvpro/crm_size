<script setup lang="ts">
const props = defineProps<{
  modelValue: string;
  value: string;
}>();

const emits = defineEmits(['update:modelValue'])

const onChangeValue = () => {
  emits('update:modelValue', props.value)
}

</script>

<template>
  <UiButtonText
    @click="onChangeValue"
    :class="
      cn('!font-medium', {
        '!text-beige-1': modelValue === value,
      })
    "
    class="!font-medium"
    ><slot
  /></UiButtonText>
</template>

<style scoped></style>
