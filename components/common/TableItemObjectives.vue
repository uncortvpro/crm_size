<script setup lang="ts">
const props = defineProps<{
  objective: Objective;
}>();

const emits = defineEmits(["deleteAction", "showDetails"]);

// const onDeleteClient = () => {
//   emits("deleteAction");
// };

const showDetails = () => {
  emits("showDetails", props.objective._id);
};

const router = useRouter();
</script>

<template>
  <UiTableItem>
    <template #header>
      <span class="max-w-[200px] w-full inline-block truncate"
        >{{ objective?.headline }}
      </span>
    </template>
    <template #elements="{ active }">
      <UiTransitionTableCell :vIf="active">
        <template #title>Дата</template>
        <template #value>Дата </template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Завдання</template>
        <template #value
          ><UiButtonText class="font-medium leading-[130%]">
            <span class="max-w-[200px] inline-block truncate"
              >{{ objective?.headline }}
            </span>
          </UiButtonText></template
        >
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Відповідальний</template>
        <template #value>{{ objective?.responsible }}</template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Дедлайн</template>
        <template #value>{{ useDate(objective?.deadline) }}</template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Створив</template>
        <template #value>Створив</template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Учасники</template>
        <template #value>
          <div class="flex items-center gap-[5px]">
            <CommonParticipantItem
              v-for="(participant, index) in objective.participants"
              :key="index"
              :letter="participant[0]"
            ></CommonParticipantItem>
          </div>
        </template>
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
          ><span class="max-w-[120px] inline-block truncate">{{
            objective?.comment
          }}</span></template
        >
      </UiTransitionTableCell>
    </template>
    <template #additional-buttons>
      <div class="flex items-center gap-[5px] md:gap-[25px]">
        <UiButtonOpacityThreeDots
          @click.stop="showDetails"
        ></UiButtonOpacityThreeDots>
        <UiButtonOpacityEdit
          class="flex-shrink-0"
          @click.stop="navigateTo('/profile/edit_client/' + objective._id)"
        />
        <UiButtonOpacityDelete class="flex-shrink-0" @click.stop="" />
      </div>
    </template>
  </UiTableItem>
</template>

<style scoped></style>
