import axios from "axios";

/**
 * Axios instance for making API requests.
 * This instance is configured with the base URL and headers.
 * It also includes the `withCredentials` option to include cookies in requests.
 * @see https://axios-http.com/docs/instance
 */
const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    withCredentials: true,
})
export default api