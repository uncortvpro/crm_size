import { log } from "console";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("authStore", () => {
    const router = useRouter();

    const isLoggedIn = ref(false);
    const token = computed(() => localStorage.getItem('token'));


    function fetchUser() {
        useAuthFetch(`${useApiUrl()}/validate_tokens`)
            // .then(res => successAuth(token.value as string));
    }

    function successAuth(token: string) {
        localStorage.setItem('token', token);
        isLoggedIn.value = true;
        router.push("/profile");
    }

    function failedAuth() {
        localStorage.removeItem('token');
        isLoggedIn.value = false;
        router.push("/authorize");
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
        successAuth,
        token,
        failedAuth,
        fetchUser
    };
});