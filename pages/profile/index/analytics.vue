<script setup lang="ts">
definePageMeta({
  middleware: ["only-finance"],
});

const fetchAnalytics = () => {
  useAuthFetch(`${useApiUrl()}/analytics`, {
    body: {
      start_date: "Tue Jan 30 2024",
      end_date: "Wed Jan 31 2024",
      purchase_frequency_client: "test@gmail.com",
      purchase_segmentation_gender: "Жіноча",
      purchase_segmentation_category: "Чоловічий одяг",
    },
  }).then((res) => {
    console.log(res);
  });
};

fetchAnalytics();
</script>

<template>
  <LayoutProfilePage title="Аналітика"> </LayoutProfilePage>
</template>

<style scoped></style>
