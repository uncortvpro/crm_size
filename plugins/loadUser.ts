export default defineNuxtPlugin(async (nuxtApp) => {
    const auth = useAuthStore();
  console.log(auth.isLoggedIn);
  
    if (!auth.isLoggedIn) {
      await auth.fetchUser();
    }
  });
  