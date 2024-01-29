export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useAuthStore();
    
    if (!auth.isFinance) {
      return navigateTo("/", { replace: true });
    }
  });
  