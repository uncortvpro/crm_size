<script setup lang="ts">
defineProps<{
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
        <template #value
          ><UiButtonText class="font-medium leading-[130%]">
            <span class="max-w-[200px] inline-block truncate">{{
              client?.name
            }}</span>
          </UiButtonText></template
        >
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
        <template #value>Історія покупок</template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Тотал сума покупок </template>
        <template #value>Тотал сума покупок</template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Дата останньої покупки</template>
        <template #value>Дата останньої покупки</template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Статус</template>
        <template #value>
          <CommonStatusOutput>{{ client?.status }}</CommonStatusOutput>
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
        @click.stop="navigateTo('/profile/edit_client/' + client._id.$oid)"
      />
      <UiButtonOpacityDelete
        class="flex-shrink-0"
        @click.stop="onDeleteClient"
      />
    </template>
  </UiTableItem>
</template>

<style scoped></style>
