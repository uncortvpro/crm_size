<script setup lang="ts">
defineProps<{
  leftImage?: boolean;
}>();
</script>

<template>
  <div class="grid gap-[15px] md:gap-[25px] xl:gap-[70px] md:grid-cols-2">
    <div
      :class="
        cn('', {
          'md:order-2': leftImage,
        })
      "
    >
      <CommonItemMarkGradient
        markValue="1"
        markStyles="flex items-center justify-center text-[17px] md:text-[28px] xl:text-[40px] font-semibold !w-[27px] !h-[27px] md:!w-[45px] md:!h-[45px] xl:!w-[70px] xl:!h-[70px]"
        >Оптимізація взаємодії з клієнтами</CommonItemMarkGradient
      >
      <UiTextMainPrimary
        class="mt-[10px] md:leading-[150%] md:!text-[16px] 2xl:!text-[25px] md:mt-[20px] xl:mt-[40px]"
        >Створюйте унікальні пропозиції для кожного клієнта на основі їхніх
        попередніх покупок та переглядів. Додавайте нових клієнтів, редагуйте
        інформацію та відстежуйте історію їхніх покупок – все це в одному місці.
        Інтуїтивний інтерфейс дозволяє вашому персоналу швидко освоїти всі
        функції, щоб вони могли зосередитися на наданні високоякісного
        обслуговування клієнтів.</UiTextMainPrimary
      >
    </div>
    <img
      :class="cn('rounded-[20px] drop-shadow-xl')"
      src="@img/clients_img.png"
      alt=""
    />
  </div>
</template>

<style scoped></style>
