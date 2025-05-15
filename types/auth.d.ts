import  { type DefaultSession } from "next-auth"
declare module "next-auth" {
    interface Session {
        accessToken?: string;
        refreshToken?: string;
        user: {
            username: string;
        } & DefaultSession["user"];
    }

    interface User {
        username: string;
        accessToken?: string;
        refreshToken?: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        accessToken?: string;
        refreshToken?: string;
    }
}


export interface AuthUser {
    username: string
    email: string
    image: string
}

export interface AuthResponse {
    accessToken: string
    refreshToken: string
    id: number
    username: string
    email: string
    firstName: string
    lastName: string
    gender: string
    image: string
}