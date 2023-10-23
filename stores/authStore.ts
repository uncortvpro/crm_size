import { defineStore } from "pinia";

export const useAuthStore = defineStore("authStore", () => {
    
    const isLoggedIn = ref(false);

    function successAuth(token: string) {
        if(!token) return false;
        localStorage.setItem('token', token);
        isLoggedIn.value = true;
        return true
      }

    function login(credentials: LoginCredentials) {
        return useApiFetch(`${useApiUrl()}/login`, {
            method: 'POST',
            body: {
                email: credentials.login,
                password: credentials.password,
            }
        })
    }
    
    function register(credentials: RegisterCredentials) {
        return useApiFetch(`${useApiUrl()}/register`, {
            method: 'POST',
            body: {
                name: credentials.name,
                phone: credentials.telephone,
                email: credentials.email,
                password: credentials.password,
                password2: credentials.cPassword,
            }
        })
    }
    return {
        isLoggedIn,
        register,
        login,
        successAuth
    };
});