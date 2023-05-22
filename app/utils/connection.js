const DEFAULT_TIME_TO_REVALIDATE = 5;
const API_URL_PROTOCOL_SCHEME = process.env.NEXT_PUBLIC_VERCEL_ENV === 'development' ? 'http://' : 'https://';

export const API_URL = API_URL_PROTOCOL_SCHEME + process.env.NEXT_PUBLIC_VERCEL_URL;

export const getData = async (url, timeToRevalidate = DEFAULT_TIME_TO_REVALIDATE) => {
    const res = await fetch(url, { next: { revalidate: timeToRevalidate } });
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}