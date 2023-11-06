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
      <span class="max-w-[200px] w-full inline-block truncate"
        >Lorem ipsum dolor sit amet, consectetur
      </span>
    </template>
    <template #elements="{ active }">
      <UiTransitionTableCell :vIf="active">
        <template #title>Дата</template>
        <template #value> 30.10.2023 </template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Завдання</template>
        <template #value
          ><UiButtonText class="font-medium leading-[130%]">
            <span class="max-w-[200px] inline-block truncate"
              >Lorem ipsum dolor sit amet, consectetur
            </span>
          </UiButtonText></template
        >
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Відповідальний</template>
        <template #value>Кузьменко А.</template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Дедлайн</template>
        <template #value>04.11.2023</template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Створив</template>
        <template #value>Волошин Д.</template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Учасники</template>
        <template #value>Учасники</template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Статус</template>
        <template #value>
          <CommonStatusOutput>Статус</CommonStatusOutput>
        </template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Коментар</template>
        <template #value
          ><span class="max-w-[120px] inline-block truncate"
            >Lorem ipsum dolor sit amet, consectetur adipisci elit</span
          ></template
        >
      </UiTransitionTableCell>
    </template>
    <template #additional-buttons>
      <div class="flex items-center gap-[5px] md:gap-[25px]">
        <UiButtonOpacityThreeDots></UiButtonOpacityThreeDots>
        <UiButtonOpacityEdit
          class="flex-shrink-0"
          @click.stop="navigateTo('/profile/edit_client/' + client._id.$oid)"
        />
        <UiButtonOpacityDelete
          class="flex-shrink-0"
          @click.stop="onDeleteClient"
        />
      </div>
    </template>
  </UiTableItem>
</template>

<style scoped></style>
