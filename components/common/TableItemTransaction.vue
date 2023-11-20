<script setup lang="ts">
const props = defineProps<{
  transaction: any;
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
        useDate(transaction.date)
      }}</span>
    </template>
    <template #elements="{ active }">
      <UiTransitionTableCell :vIf="active">
        <template #title>Дата </template>
        <template #value>
          <span
            class="font-medium leading-[130%] max-w-[200px] inline-block truncate"
            >{{ useDate(transaction.date) }}</span
          >
        </template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Сума</template>
        <template #value>
          <span
            :class="
              cn('text-[12px] md:text-[15px] font-medium', {
                'text-[#8ED400]': transaction.amount[0] === '+',
                'text-[#E33629]': transaction.amount[0] === '-',
              })
            "
          >
            {{ transaction.amount }}
          </span>
        </template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Контрагент</template>
        <template #value>{{ transaction.counterparty }}</template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Залишок у касі</template>
        <template #value>{{ transaction.cash_balance }}</template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Каса</template>
        <template #value>{{ transaction.cash_desk }} замовлень</template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Коментар </template>
        <template #value>
          <span class="inline-block max-w-[120px] truncate">
            {{ transaction.comment }}</span
          >
        </template>
      </UiTransitionTableCell>
    </template>
    <template #additional-buttons>
      <UiButtonOpacityEdit
        class="flex-shrink-0"
        @click.stop="navigateTo('/profile/edit_transaction/' + transaction._id)"
      />
      <UiButtonOpacityDelete
        class="flex-shrink-0"
        @click.stop="onDeleteClient"
      />
    </template>
  </UiTableItem>
</template>

<style scoped></style>
