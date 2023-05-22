const API_URL_PROTOCOL_SCHEME = `${process.env.NEXT_PUBLIC_VERCEL_ENV === 'development' ? 'http://' : 'https://'}`;
export const API_URL = `${API_URL_PROTOCOL_SCHEME}${process.env.NEXT_PUBLIC_VERCEL_URL}`;
export const TIME_TO_REVALIDATE = 5;