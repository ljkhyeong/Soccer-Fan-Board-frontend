import axios from 'axios';
export const SPRING_SERVER_URL = process.env.REACT_APP_SPRING_SERVER_URL;
export const axiosInstance = axios.create({
    baseURL: SPRING_SERVER_URL,
    withCredentials: true,
});

export function getAccessToken() {
    const cookies = document.cookie.split(';').map((cookie) => cookie.trim());
    const accessTokenCookie = cookies.find((cookie) => cookie.startsWith('accessToken='));
    return accessTokenCookie ? accessTokenCookie.split('=')[1] : null;
}

export function logout() {
    document.cookie = 'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}

export function formatDateTime(dateTimeString) {
    const date = new Date(dateTimeString);
    return date
        .toLocaleString('ko-KR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        })
        .replace(/\.\d+$/, '');
}
