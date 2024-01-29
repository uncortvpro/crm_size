<script setup lang="ts">
const isAddingRecipients = ref(false);
const recipients = ref<string[]>([]);
const typeMessage = ref<"telegram" | "mail">("telegram");
const subject = ref("");
const textMessage = ref("");
const error = ref("");
definePageMeta({
  middleware: ["only-finance"],
});


const onSendMail = () => {
  if (recipients.value.length === 0) {
    error.value = "Додайте отримувачів!";
    return false;
  }
  const body = {
    type: typeMessage.value,
    text: textMessage.value,
    recipients: recipients.value,
  };

  if (typeMessage.value === "mail") {
    Object.assign(body, {
      subject: subject.value,
    });
  }

  useAuthFetch(`${useApiUrl()}/send_mailing`, {
    body: body,
  }).then((res) => {
    error.value = "";
  });
};

const changeAddingRecipients = (value: boolean) => {
  isAddingRecipients.value = value;
};
</script>

<template>
  <LayoutProfilePage title="Розсилка">
    <template #content>
      <PagesMailingModalAddingRecipients
        v-model="isAddingRecipients"
        v-model:mailingEmails="recipients"
        :typeMessage="typeMessage"
        @switcherModal="changeAddingRecipients"
      ></PagesMailingModalAddingRecipients>
      <UiSwitcher
        v-model="typeMessage"
        :options="[
          { id: 'telegram', title: 'Telegram' },
          { id: 'mail', title: 'Email' },
        ]"
      >
      </UiSwitcher>
      <UiDivBorderBg class="max-w-[830px] mt-[10px] xl:mt-[40px] flex flex-col">
        <UiButtonOpacityBorderAddItem
          @click="changeAddingRecipients(true)"
          class="flex-shrink-0 self-start mb-[15px] xl:mb-[20px]"
          >Додати отримувачів</UiButtonOpacityBorderAddItem
        >
        <UiLabelProfile
          class=""
          v-if="recipients.length > 0"
          label="Отримувачі:"
        >
          <div
            class="bg-beige h-[195px] overflow-auto scroll_bar xl:h-[170px] sm:max-w-[350px] rounded-[3px] text-[9px] md:text-[12px] no_scroll_bar resize-none focus:outline-none p-[10px]"
          >
            <p
              v-for="(email, index) in recipients"
              :key="index"
              class="text-black text-[9px] leading-[150%] md:text-[10px] xl:text-[12px]"
            >
              {{ email }}
            </p>
          </div>
        </UiLabelProfile>

        <UiLabelProfile
          v-if="typeMessage !== 'telegram'"
          class="mt-[15px] xl:mt-[20px]"
          label="Тема повідомлення:"
        >
          <UiInputProfile
            v-model="subject"
            class="sm:max-w-[350px] w-full"
          ></UiInputProfile>
        </UiLabelProfile>
        <UiLabelProfile
          class="mt-[15px] xl:mt-[20px]"
          label="Текст повідомлення:"
        >
          <UiTextareaProfile
            v-model="textMessage"
            class="h-[110px] xl:h-[170px]"
          ></UiTextareaProfile>
        </UiLabelProfile>
        <UiAlertDanger v-if="error">{{ error }}</UiAlertDanger>
        <UiButtonOpacityBorder
          @click="onSendMail"
          class="mt-[35px] self-center lg:self-start"
          >Надіслати</UiButtonOpacityBorder
        >
      </UiDivBorderBg>
    </template>
  </LayoutProfilePage>
</template>

<style scoped></style>
