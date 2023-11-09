export function useSorting(value: any, reverseSorting: any, sortingCurrent: any, callback: Function) {
    if (sortingCurrent.value !== value) {
        reverseSorting.value = true;
        sortingCurrent.value = value;
        callback();
        return false;
    }

    if (reverseSorting.value) {
        reverseSorting.value = false;
        callback();
        return false;
    }

    if (!reverseSorting.value) {
        reverseSorting.value = true;
        callback();
        return false;
    }
}
