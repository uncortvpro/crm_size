<script setup lang="ts"></script>

<template>
  <tr class="grid grid-cols-auto-3 3xl:table-row">
    <UiTableText
      class="col-span-2 3xl:hidden font-medium p-[5px] sm:p-[10px] 3xl:py-[19px]"
      >Максим</UiTableText
    >
    <UiTableCell class="!hidden 3xl:!table-cell order-2 col-span-3">
      <template #title>Ім’я</template>
      <template #value><span class="font-medium">Максим</span></template>
    </UiTableCell>
    <UiTableCell class="order-3 col-span-3">
      <template #title>Номер телефону</template>
      <template #value>+380956854219</template>
    </UiTableCell>
    <UiTableCell class="order-4 col-span-3">
      <template #title>Email</template>
      <template #value> max@example.com</template>
    </UiTableCell>
    <UiTableCell class="order-5 col-span-3">
      <template #title>Instagram</template>
      <template #value>@max_the_adventurer</template>
    </UiTableCell>
    <UiTableCell class="order-6 col-span-3">
      <template #title>Історія покупок</template>
      <template #value>5 замовлень</template>
    </UiTableCell>
    <UiTableCell class="order-7 col-span-3">
      <template #title>Тотал сума покупок</template>
      <template #value>12063₴</template>
    </UiTableCell>
    <UiTableCell class="order-8 col-span-3">
      <template #title>Дата останньої покупки</template>
      <template #value>23.10.2023</template>
    </UiTableCell>
    <UiTableCell class="order-9 col-span-3">
      <template #title>Статус</template>
      <template #value>Постійний</template>
    </UiTableCell>
    <UiTableCellPadding class="order-1">
      <div class="flex justify-end gap-1">
        <button class="p-2 border-black border">1</button>
        <button class="p-2 border-black border">2</button>
        <button class="3xl:hidden p-2 border-black border">3</button>
      </div>
    </UiTableCellPadding>
  </tr>
</template>

<style scoped></style>
