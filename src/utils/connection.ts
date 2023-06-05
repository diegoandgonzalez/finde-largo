const DEFAULT_TIME_TO_REVALIDATE = 0;
const API_URL_PROTOCOL_SCHEME = process.env.NEXT_PUBLIC_VERCEL_ENV === "development" ? "http://" : "https://";

export const API_URL = API_URL_PROTOCOL_SCHEME + process.env.NEXT_PUBLIC_VERCEL_URL;

export const getData = async (url: string, timeToRevalidate = DEFAULT_TIME_TO_REVALIDATE) => {
    return await fetch(url, { next: { revalidate: timeToRevalidate } })
        .then((response) => response.json())
        .then((json) => json)
        .catch(err => err);
}