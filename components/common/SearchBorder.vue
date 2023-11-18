<script setup lang="ts">
defineProps<{
  theme: "black" | "beige";
}>();

const emits = defineEmits(["search"]);
const valueSearch = ref("");

const search = () => {
  emits("search", valueSearch.value);
};
</script>

<template>
  <form action="#" @submit.prevent="search">
    <div
      :class="
        cn(
          'border-[2px] w-full flex items-center justify-between  rounded-[5px]',
          {
            'border-black': theme === 'black',
            'border-beige-1': theme === 'beige',
          }
        )
      "
    >
      <input
        v-model="valueSearch"
        type="text"
        :class="
          cn(
            'text-[11px] focus:border-none focus:outline-none py-[8px] px-[16px] xl:py-[12px] xl:px-[24px] bg-transparent xl:text-[15px] w-full font-medium ',
            {
              'placeholder:text-black': theme === 'black',
              'placeholder:text-beige-1': theme === 'beige',
            }
          )
        "
        placeholder="Пошук"
      />
      <button class="mr-[10px] xl:mr-[12px]">
        <SvgoSearch
          :class="
            cn('!w-[12px] !h-[12px] xl:!w-[18px] xl:!h-[18px]', {
              'text-black': theme === 'black',
              'text-beige-1': theme === 'beige',
            })
          "
        ></SvgoSearch>
      </button>
    </div>
  </form>
</template>

<style scoped></style>
