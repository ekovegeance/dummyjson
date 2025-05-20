import {NextRequest, NextResponse} from "next/server"
import {auth} from "@/auth";
import {getAuthUser} from "@/lib/data/auth"

/**
 * Middleware to protect routes
 * @see https://authjs.dev/getting-started/session-management/protecting
 * @see https://nextjs.org/docs/app/guides/authentication#optimistic-checks-with-middleware-optional
 *
 */

// 1. Specify protected and public routes
const protectedRoutes = ["/dashboard"]
const publicRoutes = ["/signin"]

export default async function middleware(req: NextRequest) {
    // 2. Check if the current route is protected or public
    const path = req.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.includes(path)
    const isPublicRoute = publicRoutes.includes(path)

    // 3. Auth.js session
    const session = await auth()
    const user = await getAuthUser();
    const isAdmin = user?.role === "admin"
    const isAuthenticated = !!session?.user

    // 4. Redirect to /login if the user is not authenticated
    if (isProtectedRoute && !isAuthenticated) {
        return NextResponse.redirect(new URL("/signin", req.url))
    }
    // Redirect / if user not admin
    if (isProtectedRoute && isAuthenticated && !isAdmin) {
        return NextResponse.redirect(new URL("/", req.url))
    }

    // 5. Redirect to / if the user is authenticated and trying to access a sign-in page
    if (isPublicRoute && isAuthenticated) {
        return NextResponse.redirect(new URL("/", req.url))
    }
    return NextResponse.next()
}

// Routes Middleware should not run on
export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}