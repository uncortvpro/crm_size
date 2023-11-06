<script setup lang="ts">
const props = defineProps<{
  clientId: string;
}>();
const emits = defineEmits(["switchModal"]);
const clientsStore = useClientsStore();

const deleteClient = (id: string) => {
  clientsStore.deleteClient(id);
};

const switchModal = (value: boolean) => {
  emits("switchModal", false);
};

const confirmRemove = async () => {
  await deleteClient(props.clientId);
  emits("switchModal", false);
};
</script>

<template>
  <UiModalWarning @closeModal="switchModal(false)" @confirm="confirmRemove"
    >Ви впевнені, що хочете видалити клієнта?</UiModalWarning
  >
</template>

<style scoped></style>
