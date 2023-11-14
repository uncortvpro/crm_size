<script setup lang="ts">
const props = defineProps<{
  objective: Objective;
}>();

const emits = defineEmits(["deleteAction", "showDetails"]);

const onDeleteClient = () => {
  emits("deleteAction");
};

const showDetails = () => {
  emits("showDetails", props.objective._id);
};

const outputParticipants = computed(() => props.objective.participants.filter((el, index) => index < 3) || []);  


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
        <template #value>{{ useDate(objective?.date) }}</template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Завдання</template>
        <template #value>
          <span
            class="font-medium leading-[130%] max-w-[200px] inline-block truncate"
            >{{ objective?.headline }}
          </span>
        </template>
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
        <template #value>{{ objective?.creator }}</template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Учасники</template>
        <template #value>
          <div class="flex items-center gap-[5px]">
            <CommonParticipantItem
              disabled
              v-for="(participant, index) in outputParticipants"
              :key="index"
              :name="participant[0]"
            ></CommonParticipantItem>
            <CommonParticipantItem
            v-if="objective.participants.length > 3"
              :output="`+${objective.participants.length - 3}`"
              disabled
            ></CommonParticipantItem>
          </div>
        </template>
      </UiTransitionTableCell>
      <UiTransitionTableCell :vIf="active">
        <template #title>Статус</template>
        <template #value>
          <CommonStatusOutput :color="objective.status.colour">{{
            objective.status.status
          }}</CommonStatusOutput>
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
          @click.stop="navigateTo('/profile/edit_objective/' + objective._id)"
        />
        <UiButtonOpacityDelete class="flex-shrink-0" @click.stop="onDeleteClient" />
      </div>
    </template>
  </UiTableItem>
</template>

<style scoped></style>
