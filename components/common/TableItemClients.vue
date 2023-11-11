<script setup lang="ts">
const props = defineProps<{
  client: Client;
}>();

const emits = defineEmits(["deleteAction"]);

const onDeleteClient = () => {
  emits("deleteAction");
};

const router = useRouter();
</script>

<template>
  <UiTableItem>
    <template #header>
      <span class="max-w-[200px] w-full inline-block truncate">{{
        client?.name
      }}</span>
    </template>
    <template #elements="{ active }">
      <UiTransitionTableCell :vIf="active">
        <template #title>Ім’я</template>
        <template #value>
          <span
            class="font-medium leading-[130%] max-w-[200px] inline-block truncate"
            >{{ client?.name }}</span
          >
        </template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Номер телефону</template>
        <template #value>
          {{ client?.phone }}
        </template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Email</template>
        <template #value>{{ client?.email }}</template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Instagram</template>
        <template #value>{{ client?.instagram }}</template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Історія покупок </template>
        <template #value>{{ client.orders.length }} замовлень</template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Тотал сума покупок </template>
        <template #value
          >{{ client?.total_price_sum }}<CommonCurrencyText></CommonCurrencyText
        ></template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Дата останньої покупки</template>
        <template #value>{{ client?.latest_order_date }}</template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Статус</template>
        <template #value>
          <CommonStatusOutput :color="client.status.colour">{{
            client?.status?.status
          }}</CommonStatusOutput>
        </template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active" class="3xl:hidden col-span-2">
        <template #title>
          <UiButtonTextArrowRight>Детальніше</UiButtonTextArrowRight>
        </template>
      </UiTransitionTableCell>
    </template>
    <template #additional-buttons>
      <UiButtonOpacityEdit
        class="flex-shrink-0"
        @click.stop="navigateTo('/profile/edit_client/' + client._id)"
      />
      <UiButtonOpacityDelete
        class="flex-shrink-0"
        @click.stop="onDeleteClient"
      />
    </template>
  </UiTableItem>
</template>

<style scoped></style>
