import { defineStore } from "pinia";

export const useAuthStore = defineStore("authStore", () => {
    const router = useRouter();
    const user = ref<User | null>(null);
    const isLoggedIn = computed(() => !!user.value);
    const token = localStorage.getItem('token');
    const isAllRole = computed(() => user.value?.role === 'all');



    function fetchUser() {
        return useAuthFetch(`${useApiUrl()}/validate_tokens`)
            .then(res => {
                user.value = res;
            }).catch(err => {
                failedToken();
            });
    }

    async function successAuth(token: string) {
        
        localStorage.setItem('token', token);
        await fetchUser().then(res => {
            router.push("/profile");
        });
    }

    function failedToken() {
        localStorage.removeItem('token');
        user.value = null;
        navigateTo('/authorize');
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
        return useApiFetch(`${useApiUrl()}/demo_register`, {
            method: 'POST',
            body: {
                name: credentials.name,
                phone: credentials.telephone,
                email: credentials.email,
                brand: credentials.brand,
                position: credentials.position,
            }
        })
    }

    fetchUser();
    return {
        isLoggedIn,
        register,
        login,
        successAuth,
        failedToken,
        fetchUser,
        user,
        isAllRole
    };
});