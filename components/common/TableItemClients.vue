<script setup lang="ts">
const router = useRouter();
</script>

<template>
  <UiTableItem>
    <template #header> Максим </template>
    <template #elements="{ active }">
      <UiTransitionTableCell :vIf="active">
        <template #title>Дата покупки</template>
        <template #value
          ><UiButtonText class="font-medium leading-[130%]"
            >Максим</UiButtonText
          ></template
        >
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Номер телефону</template>
        <template #value>+380956854219</template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Email</template>
        <template #value>max@example.com</template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Instagram</template>
        <template #value>@max_the_adventurer</template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Історія покупок </template>
        <template #value>5 замовлень</template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Тотал сума покупок </template>
        <template #value>12063₴</template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Дата останньої покупки</template>
        <template #value>23.10.2023</template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Статус</template>
        <template #value>
          <CommonStatusOutput>Постійний</CommonStatusOutput>
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
        @click.stop="navigateTo('/profile/edit_client/client_id')"
      />
      <UiButtonOpacityDelete @click.stop="" />
    </template>
  </UiTableItem>
</template>

<style scoped></style>
