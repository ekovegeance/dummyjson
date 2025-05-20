import api from "@/lib/axios";
import {auth} from "@/auth"

export async function getAuthUser() {
    const session = await auth();
    const accessToken = session?.user?.accessToken;
    try {
        const response = await api.get("/auth/me", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching current user:", error);
        // throw error;
    }
}