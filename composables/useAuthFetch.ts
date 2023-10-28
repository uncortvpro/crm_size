export function useAuthFetch<T>(url: string, options: any = {}) {
    const auth = useAuthStore();
    const token = localStorage.getItem('token');
    
    let headers: any = {};

    headers = {
        ...headers,
    };

    return $fetch<T>(url, {
        ...options,
        method: options.method || 'POST',
        headers: {
            ...headers,
            ...options?.headers,
        },
        body: {
            access_token: token,
            ...options?.body
        }
    }).then((res: any) => {
        if(res.message === 'Access token or refresh token is missing') {
            auth.failedToken();
        }
        return res;
    })
}
