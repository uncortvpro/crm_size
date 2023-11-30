<script setup lang="ts">
defineProps<{
  bgBeige?: boolean;
  header: string;
  description: string;
  button: string;
  paddingY?: boolean;
  paddingContainer?: boolean;
  bgContainerOverflowHidden?: boolean;
}>();
</script>

<template>
  <main class="mt-[20px]">
    <div class="container">
      <div
        :class="
          cn('rounded-[20px]', {
            'bg-beige': bgBeige,
            'xl:py-[50px]': paddingY,
            'overflow-hidden': bgContainerOverflowHidden,
          })
        "
      >
        <div
          :class="
            cn(
              'relative flex xl:grid grid-cols-12 flex-col xl:pt-[110px] 3xl:pt-[200px] pb-[100px] md:pb-[110px]',
              {
                'px-[19px] md:px-[40px] xl:px-[70px] pt-[60px]  md:pt-[90px] xl:pt-[110px] 3xl:pt-[200px]':
                  paddingContainer,
              }
            )
          "
        >
          <div class="max-w-[1168px] text-black col-span-8 3xl:col-span-10">
            <h2
              class="uppercase text-[30px] font-bold md:text-[45px] 3xl:text-[65px]"
            >
              {{ header }}
            </h2>
            <UiTextMainPrimary
              class="text-[15px] mt-[10px] md:mt-[15px] xl:mt-[20px] font-medium md:text-[20px] xl:text-[25px]"
            >
              {{ description }}
            </UiTextMainPrimary>
            <UiButtonPrimary
              @click="navigateTo('/register')"
              class="mt-[25px] md:mt-[35px] xl:mt-[65px]"
            >
              {{ button }}
            </UiButtonPrimary>
          </div>
          <slot name="main_image"></slot>
        </div>
        <slot name="additional_elements"></slot>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
