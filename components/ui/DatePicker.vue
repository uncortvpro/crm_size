<script setup lang="ts">
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const date = ref();
</script>

<template>
  <VueDatePicker
    class="date_picker"
    v-model="date"
    locale="uk"
    :enable-time-picker="false"
    auto-apply
  >
    <template #dp-input="{ value }">
      <UiButtonIconProfile :value="value">
        <SvgoCalendar v-if="!date"></SvgoCalendar>
      </UiButtonIconProfile>
    </template>
  </VueDatePicker>
</template>

<style>
.date_picker {
  font-weight: 500;
}
.date_picker .dp--arrow-btn-nav {
  order: 3;
  justify-self: flex-end;
}

.date_picker .dp__theme_light .dp__arrow_top {
  display: none;
}

.date_picker .dp__month_year_row {
  display: grid;
  grid-template-columns: 100px auto 25px;
}

.date_picker .dp__month_year_wrap {
  width: auto;
}

.date_picker .dp__menu {
  border: none;
  box-shadow: 0px 5px 20px #edede4;
}

.date_picker .dp__calendar_row {
  column-gap: 0px;
}

.date_picker .dp__theme_light,
.date_picker .dp__theme_dark {
  --dp-background-color: #edede4;
  --dp-border-radius: 3px;
  --dp-font-size: 12px;
  --dp-font-family: Montserrat;
  --dp-primary-color: #c8c8be;
  --dp-primary-text-color: #111111;
  --dp-cell-border-radius: 50%;
}

@media screen and (min-width: 400px) {
  .date_picker .dp__calendar_row {
    column-gap: 10px;
  }
}
</style>
