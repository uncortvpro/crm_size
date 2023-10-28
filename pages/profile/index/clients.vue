<script setup lang="ts">
const router = useRouter();

const isOpen = ref(false);
</script>

<template>
  <LayoutProfilePage title="Клієнти">
    <template #content>
      <div class="mt-[15px] xl:mt-[25px]">
        <CommonModalRemoveClient v-model="isOpen"></CommonModalRemoveClient>
        <div class="flex justify-between gap-[15px] items-center">
          <UiButtonOpacityBorderAddItem
            @click="router.push('new_client')"
            class="flex-shrink-0"
            >Додати клієнта</UiButtonOpacityBorderAddItem
          >
          <CommonSearchBorder />
        </div>
        <CommonTable>
          <template #headers>
            <UiTableCellHeader>Ім’я</UiTableCellHeader>
            <UiTableCellHeader>Номер телефону</UiTableCellHeader>
            <UiTableCellHeader>Email</UiTableCellHeader>
            <UiTableCellHeader>Instagram</UiTableCellHeader>
            <UiTableCellHeader>Історія покупок </UiTableCellHeader>
            <UiTableCellHeader>Тотал сума покупок</UiTableCellHeader>
            <UiTableCellHeader>
              <UiButtonTextArrowTop @click="isOpen = true" class="!font-normal"
                >Дата останньої покупки</UiButtonTextArrowTop
              >
            </UiTableCellHeader>
            <UiTableCellHeader>Статус</UiTableCellHeader>
          </template>
          <template #items>
            <CommonTableItemClients></CommonTableItemClients>
            <CommonTableItemClients></CommonTableItemClients>
            <CommonTableItemClients></CommonTableItemClients>
            <CommonTableItemClients></CommonTableItemClients>
            <CommonTableItemClients></CommonTableItemClients>
            <CommonTableItemClients></CommonTableItemClients>
            <CommonTableItemClients></CommonTableItemClients>
            <CommonTableItemClients></CommonTableItemClients>
            <CommonTableItemClients></CommonTableItemClients>
            <CommonTableItemClients></CommonTableItemClients>
            <CommonTableItemClients></CommonTableItemClients>
            <CommonTableItemClients></CommonTableItemClients>
          </template>
        </CommonTable>
      </div>
    </template>
  </LayoutProfilePage>
</template>

<style scoped></style>
