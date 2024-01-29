export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useAuthStore();
    
    if (auth.onlyFinance) {
      return navigateTo("/", { replace: true });
    }
  });
  