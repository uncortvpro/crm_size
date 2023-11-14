<script setup lang="ts">
const props = defineProps<{
  addedParticipants: string[];
  type: string;
}>();

const emits = defineEmits(["updateParticipants"]);

const updateParticipants = (item: Participant) => {
  emits(
    "updateParticipants",
    [...props.addedParticipants, item.name],
    props.type
  );
};

const addParticipantsInput = (item: Participant) => {
  if (!inputParticipant.value.name) return false;

  updateParticipants(item);
  inputParticipant.value.name = "";
};

const checkParticipants = (name: string) => {
  return !!props.addedParticipants.find((item) => item === name);
};

const removeParticipants = (name: string) => {
  const deleted = props.addedParticipants.filter((el) => el !== name);
  emits("updateParticipants", deleted, props.type);
};

const addRemoveParticipants = (item: Participant) => {
  if (checkParticipants(item.name)) {
    removeParticipants(item.name);
    return false;
  }
  updateParticipants(item);
};

const isModalAdding = ref(false);

const switchModal = (value: boolean) => {
  isModalAdding.value = value;
};
const participants = ref<Participant[]>([]);
const inputParticipant = ref({
  name: "",
} as Participant);

const fetchParticipants = () => {
  useAuthFetch(`${useApiUrl()}/users`).then((res) => {

    participants.value = res.users;
  });
};

fetchParticipants();
</script>

<template>
  <div class="py-[5px] flex gap-[5px] items-center">
    <CommonParticipantItem
      v-for="item in addedParticipants"
      :key="item"
      :name="item"
      @click="removeParticipants(item)"
      hover
    ></CommonParticipantItem>
    <CommonParticipantItem @click="switchModal(true)" class="bg-beige">
      <template #icon>
        <SvgoCross class="!w-[30px] h-[30px] stroke-beige-1"></SvgoCross>
      </template>
    </CommonParticipantItem>
  </div>
  <UiModalTitle v-model="isModalAdding" title="Додати учасників" :ui="{ width: '!max-w-[414px]' }">
      <UiLabelProfile label="Введіть ім’я:" class="mt-[20px]">
        <div class="flex items-center gap-[15px]">
          <UiInputProfile
            v-model="inputParticipant.name"
            class="w-full"
          ></UiInputProfile>
          <CommonParticipantItem
            @click="addParticipantsInput(inputParticipant)"
            class="bg-beige flex-shrink-0"
          >
            <template #icon>
              <SvgoCross class="!w-[30px] h-[30px] stroke-beige-1"></SvgoCross>
            </template>
          </CommonParticipantItem>
        </div>
      </UiLabelProfile>
      <UiLabelProfile
        label="або оберіть доступних учасників:"
        class="mt-[15px] border-b border-beige-1"
      >
        <div
          class="py-[10px] flex flex-col gap-[10px] max-h-[254px] overflow-scroll scroll_bar"
        >
          <CommonParticipantAddingItem
            v-for="participant in participants"
            :name="participant.name"
            :email="participant.email"
            :checked="checkParticipants(participant.name)"
            @click="addRemoveParticipants(participant)"
          ></CommonParticipantAddingItem>
        </div>
      </UiLabelProfile>
      <UiLabelProfile label="Обрані учасники:" class="mt-[15px]">
        <div class="py-[5px] flex gap-[10px] flex-wrap">
          <div
            v-for="item in addedParticipants"
            :key="item"
            class="flex flex-col gap-[5px] items-center max-w-[45px]"
            @click="removeParticipants(item)"
          >
            <CommonParticipantItem hover :name="item"></CommonParticipantItem>
            <p class="text-[8px] text-center break-words">{{ item }}</p>
          </div>
        </div>
      </UiLabelProfile>
      <UiButtonOpacityBorder
        @click="switchModal(false)"
        class="self-center mt-[25px]"
        >Зберегти</UiButtonOpacityBorder
      >
  </UiModalTitle>
</template>

<style scoped></style>
