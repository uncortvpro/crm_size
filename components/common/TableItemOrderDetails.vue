<script setup lang="ts"></script>

<template>
  <UiTableItem
    :isMobileClose="false"
    class="grid-cols-order-details-modal-xs md:grid-cols-order-details-modal-md"
  >
    <template #elements>
      <UiTableCellPadding class="!grid-cols-1 !col-span-1 row-span-5">
        <img src="@img/jumper.jpg" alt="" />
      </UiTableCellPadding>
      <UiTableCell class="col-span-2">
        <template #title>Найменування</template>
        <template #value>Светр чоловічий</template>
      </UiTableCell>
      <UiTableCell class="col-span-2">
        <template #title>Артикул</template>
        <template #value>#563892 </template>
      </UiTableCell>
      <UiTableCell class="col-span-2">
        <template #title>Розмір</template>
        <template #value>M </template>
      </UiTableCell>
      <UiTableCell class="col-span-2">
        <template #title>Кількість</template>
        <template #value>1</template>
      </UiTableCell>
      <UiTableCell class="col-span-2">
        <template #title>Ціна</template>
        <template #value>1250₴</template>
      </UiTableCell>
    </template>
  </UiTableItem>
</template>

<style scoped></style>
