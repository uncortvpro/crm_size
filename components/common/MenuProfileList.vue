<script setup lang="ts"></script>

<template>
  <ul
  >
    <li>
      <CommonMenuProfileItem to="/profile/clients">
        <template #logo>
          <SvgoClients class="!w-full !h-auto"></SvgoClients>
        </template>
        <template #title>Клієнти</template>
      </CommonMenuProfileItem>
    </li>
    <li>
      <CommonMenuProfileItem to="/profile/objectives">
        <template #logo>
          <SvgoTasks class="!w-full !h-auto"></SvgoTasks>
        </template>
        <template #title>Задачі</template>
      </CommonMenuProfileItem>
    </li>
    <li>
      <CommonMenuProfileItem to="/profile/finance">
        <template #logo>
          <SvgoFinance
            color="transparent"
            class="!w-full !h-auto"
          ></SvgoFinance>
        </template>
        <template #title>Фінанси</template>
      </CommonMenuProfileItem>
    </li>
    <li>
      <CommonMenuProfileItem to="/profile/warehouses">
        <template #logo>
          <SvgoStock class="!w-full !h-auto"></SvgoStock>
        </template>
        <template #title>Склади</template>
      </CommonMenuProfileItem>
    </li>
    <li>
      <CommonMenuProfileItem to="/profile/my_orders">
        <template #logo>
          <SvgoOrders class="!w-full !h-auto"></SvgoOrders>
        </template>
        <template #title>Мої замовлення</template>
      </CommonMenuProfileItem>
    </li>
    <li>
      <CommonMenuProfileItem to="/profile/mailing_list">
        <template #logo>
          <SvgoNewsletter class="!w-full !h-auto"></SvgoNewsletter>
        </template>
        <template #title>Розсилка</template>
      </CommonMenuProfileItem>
    </li>
    <li>
      <CommonMenuProfileItem to="/profile/analytics">
        <template #logo>
          <SvgoAnalytics class="!w-full !h-auto"></SvgoAnalytics>
        </template>
        <template #title>Аналітика</template>
      </CommonMenuProfileItem>
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
