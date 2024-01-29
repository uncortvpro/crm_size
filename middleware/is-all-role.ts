export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useAuthStore();
    
    if (!auth.isAllRole) {
      return navigateTo("/", { replace: true });
    }
  });
  