<script setup lang="ts">
const emits = defineEmits(["closeModal"]);

const name = ref("");

const onAddCounterparties = () => {
  useAuthFetch(`${useApiUrl()}/add_counterpartie`, {
    body: {
      name: name.value,
    },
  }).then((res) => {
    if (res.message) {
      emits("closeModal");
    }
  });
};
</script>

<template>
  <UiModalTitle title="Додати контрагента" :ui="{ width: '!max-w-[414px]' }">
    <form action="#" @submit.prevent="onAddCounterparties">
      <div class="flex flex-col pt-[15px] xl:pt-[20px]">
        <UiLabelProfile label="Ведіть ім'я">
          <UiInputProfile required v-model="name"></UiInputProfile>
        </UiLabelProfile>
        <UiButtonOpacityBorder
          type="submit"
          class="mt-[20px] xl:mt-[30px] self-center w-fit"
          >Зберегти</UiButtonOpacityBorder
        >
      </div>
    </form>
  </UiModalTitle>
</template>

<style scoped></style>
