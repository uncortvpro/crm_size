export function useApiFetch<T>(url: string, options: any = {}) {
    let headers: any = {};

    headers = {
        ...headers,
    };

    return $fetch<T>(url, {
        ...options,
        headers: {
            ...headers,
            ...options?.headers,
        },
    });
}
