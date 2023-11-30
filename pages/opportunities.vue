<script setup lang="ts">
const itemsHowItWork = [
  {
    number: 1,
    title: "Робота з клієнтами",
    leftImage: true,
    image: "./img/clients_img.png",
    description:
      "Створюйте унікальні пропозиції для кожного клієнта на основі їхніх попередніх покупок та переглядів.Додавайте нових клієнтів, редагуйте інформацію та відстежуйте історію їхніх покупок – все це в одному місці. Інтуїтивний інтерфейс дозволяє вашому персоналу швидко освоїти всі функції, щоб вони могли зосередитися на наданні високоякісного обслуговування клієнтів.",
  },
  {
    number: 2,
    title: "Робота з працівниками",
    leftImage: false,
    image: "./img/tasks_table.png",
    description:
      "Забезпечте чітке розподілення завдань та відстеження їх виконання. Наша CRM-система допомагає управляти робочим процесом, забезпечуючи прозорість та високу ефективність. Система дозволяє створювати індивідуальні та командні завдання, роблячи роботу захопливою та стимулюючою.",
  },
  {
    number: 3,
    title: "Робота зі складами",
    leftImage: true,
    image: "./img/products_table.png",
    description:
      "Забудьте про невпорядковані склади та втрату товарів. Система дозволяє точно відстежувати рух кожної одиниці товару, гарантуючи, що ви завжди знаєте, скільки товару у вас є, і де він знаходиться. Це ключ до оптимального управління вашими запасами та логістикою. Від зручного ведення інвентарю до автоматизованого контролю за поставками.",
  },
];
</script>

<template>
  <div class="">
    <CommonSectionMain
      paddingY
      button="СПРОБУВАТИ"
      header="ПРОСТІШЕ НЕ ПРИДУМАЄШ"
      description="CRM-система, в якій все просто і зрозуміло!"
    >
      <template #main_image>
        <img
          src="@img/two_mobile.png"
          class="w-full mt-[50px] self-center z-10 xl:mt-0 xl:max-w-full col-span-4 3xl:col-span-2 3xl:ml-[-250px] 3xl:mt-[-100px] 3xl:w-[500px] 4xl:ml-[-300px] 4xl:w-[600px] 3xl:max-w-[700px] max-w-[400px]"
          alt=""
        />
        <UiRadialGradientAbsolute
          class="bottom-[20%] md:bottom-[10%] left-0 right-0 m-auto xl:bottom-[0%] xl:left-auto"
        ></UiRadialGradientAbsolute>
      </template>
    </CommonSectionMain>
    <div class="mt-[100px] md:mt-[110px]">
      <div class="container flex flex-col">
        <UiTitleSection class="text-center">Як це працює</UiTitleSection>
        <div
          class="mt-[51px] xl:[60px] flex flex-col gap-[35px] md:gap-[40px] xl:gap-[50px]"
        >
          <PagesItemHowThisWork
            v-for="item in itemsHowItWork"
            :leftImage="item.leftImage"
            :key="item.number"
            :item="item"
          ></PagesItemHowThisWork>
        </div>
        <UiButtonPrimary
          @click="navigateTo('/register')"
          class="mt-[40px] self-center md:mt-[60px] xl:mt-[80px]"
          >СПРОБУВАТИ</UiButtonPrimary
        >
      </div>
    </div>
    <CommonSectionIntegrations></CommonSectionIntegrations>
  </div>
</template>

<style scoped></style>
