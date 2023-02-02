export const getURL = (url: string, params: any) => {
    if (Object.keys(params).length) {
        Object.keys(params).map((param : any, i: number) => {
            const value = params[param];
            if (i == 0) url += `?${param}=${value}`
            else url += `&${param}=${value}`;
        });
    }

    return url;
}