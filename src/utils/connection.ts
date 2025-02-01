const DEFAULT_TIME_TO_REVALIDATE = 0;

export const API_URL = process.env.NEXT_PUBLIC_URL;

export const getData = async (url: string, timeToRevalidate = DEFAULT_TIME_TO_REVALIDATE) => {
    return await fetch(url, { next: { revalidate: timeToRevalidate } })
        .then((response) => response.json())
        .then((json) => json)
        .catch(() => null);
}