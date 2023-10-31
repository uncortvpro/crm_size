<script setup lang="ts">
const router = useRouter();
const isMobileMenu = ref<boolean>(false);
const auth = useAuthStore();

const isLoggedIn = computed(() => auth.isLoggedIn);

const switchMenu = (value: boolean) => {
  isMobileMenu.value = value;
};

provide("switchMenu", switchMenu);
</script>

<template>
  <LayoutHeader>
    <template #header-items>
      <UiButtonTransparent
        v-if="!isLoggedIn"
        class="hidden lg:block"
        @click="router.push('/register')"
        type="button"
      >
        РЕЄСТРАЦІЯ
      </UiButtonTransparent>
      <UiButtonPrimary
        v-if="!isLoggedIn"
        type="button"
        @click="router.push('/authorize')"
      >
        УВІЙТИ
      </UiButtonPrimary>
      <UiButtonPrimary
        v-if="isLoggedIn"
        type="button"
        @click="router.push('/profile')"
      >
        Профіль
      </UiButtonPrimary>
      <CommonButtonBurger
        class="self-center ml-[15px] lg:hidden"
        :isActive="isMobileMenu"
        @click="switchMenu(!isMobileMenu)"
      />
    </template>
    <template #header-menu-list>
      <CommonMenuList :isActive="isMobileMenu">
        <template #mobile>
          <ul
            class="flex bg-white flex-col pt-[67px] rounded-b-[3px] text-center mx-[-15px] gap-[26px] relative z-[15] py-4 lg:py-0 font-medium lg:flex-row lg:space-x-8 lg:mt-0"
          >
            <li>
              <CommonMenuLink to="/">МОЖЛИВОСТІ</CommonMenuLink>
            </li>
            <li>
              <CommonMenuLink to="/">БЛОГ</CommonMenuLink>
            </li>
            <li>
              <CommonMenuLink to="/">КОНТАКТИ</CommonMenuLink>
            </li>
            <li v-if="!isLoggedIn">
              <UiButtonTransparent class="lg:hidden !px-[0px]"
                >РЕЄСТРАЦІЯ</UiButtonTransparent
              >
            </li>
          </ul>
        </template>
        <template #desktop>
          <ul
            class="flex bg-white flex-col rounded-b-[3px] text-center mx-[-15px] gap-[26px] relative z-[15] py-4 lg:py-0 font-medium lg:flex-row lg:space-x-8 lg:mt-0"
          >
            <li>
              <CommonMenuLink to="/">МОЖЛИВОСТІ</CommonMenuLink>
            </li>
            <li>
              <CommonMenuLink to="/">БЛОГ</CommonMenuLink>
            </li>
            <li>
              <CommonMenuLink to="/">КОНТАКТИ</CommonMenuLink>
            </li>
          </ul>
        </template>
      </CommonMenuList>
    </template>
  </LayoutHeader>
</template>

<style scoped></style>
