export function useAuthFetch<T>(url: string, options: any = {}) {
    const auth = useAuthStore();
    const token = computed(() => auth.token);
    
    let headers: any = {};

    headers = {
        ...headers,
    };

    return $fetch<T>(url, {
        ...options,
        method: 'POST',
        headers: {
            ...headers,
            ...options?.headers,
        },
        body: {
            access_token: token.value,
            ...options?.body
        }
    }).then((res: any) => {
        if(res.valid) {
            return res;
        }
        auth.failedAuth();
        return res.message;
    }).catch(err => {
        auth.failedAuth();
        return false;
    });
}
