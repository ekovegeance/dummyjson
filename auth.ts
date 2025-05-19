import NextAuth from "next-auth";
import Credentials from "@auth/core/providers/credentials";
import api from "@/lib/axios";

export const {handlers, signIn, signOut, auth} = NextAuth({
    pages: {
        signIn: "/login"
    },
    providers: [
        Credentials({
            credentials: {
                username: {
                    type: "text",
                    label: "Username",
                    placeholder: "johndoe",
                },
                password: {
                    type: "password",
                    label: "Password",
                    placeholder: "*****",
                },
            },
            authorize: async (credentials) => {
                const res = await api.post("/auth/login", {
                    username: credentials.username,
                    password: credentials.password,
                });

                const user = res.data;

                if (!user?.accessToken) throw new Error("Invalid credentials");

                return {
                    username: user.username,
                    name: `${user.firstName} ${user.lastName}`,
                    email: user.email,
                    image: user.image,
                    accessToken: user.accessToken,
                    refreshToken: user.refreshToken,
                }
            },
        }),
    ],

    session: {
        strategy: "jwt",
    },

    callbacks: {
        async jwt({token, user}) {
            if (user) {
                token.accessToken = user.accessToken;
                token.refreshToken = user.refreshToken;
                token.username = user.username;
            }
            return token;
        },
        async session({session, token}) {
            return {
                ...session,
                user: {
                    ...session.user,
                    username: token.username as string,
                },
            }
        },
    },
});
