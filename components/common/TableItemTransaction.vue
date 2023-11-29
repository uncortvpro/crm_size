<script setup lang="ts">
const props = defineProps<{
  transaction: Transaction;
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
                'text-[#8ED400]': String(transaction.sum)[0] !== '-',
                'text-[#E33629]': String(transaction.sum)[0] === '-',
              })
            "
          >
            {{ transaction?.sum }}<CommonCurrencyText />
          </span>
        </template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Контрагент</template>
        <template #value>{{ transaction?.counterpartie }}</template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Залишок у касі</template>
        <template #value>{{ transaction?.total_left }}</template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Каса</template>
        <template #value>{{ transaction?.cashier }} замовлень</template>
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
