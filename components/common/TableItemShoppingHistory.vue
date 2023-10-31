<script setup lang="ts"></script>

<template>
  <UiTableItem :isMobileClose="true">
    <template #header> 23.10.2023 </template>
    <template #elements="{ active }">
      <UiTransitionTableCell :vIf="active">
        <template #title>Дата покупки</template>
        <template #value>23.10.2023</template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Номер замовлення</template>
        <template #value>#165583</template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Сума замовлення</template>
        <template #value>2413₴</template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Товари</template>
        <template #value>2</template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Оплата</template>
        <template #value>Картка</template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active" class="3xl:w-[12%]">
        <template #title>Статус замовлення</template>
        <template #value>
          <CommonStatusOutput>Відправлено</CommonStatusOutput>
        </template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active" class="3xl:hidden col-span-2">
        <template #title>
          <UiButtonTextArrowRight>Детальніше</UiButtonTextArrowRight>
        </template>
      </UiTransitionTableCell>
    </template>
    <template #additional-buttons>
      <UiButtonOpacityThreeDots
        class="hidden 3xl:block"
      ></UiButtonOpacityThreeDots>
    </template>
  </UiTableItem>
</template>

<style scoped></style>
