import Navbar from "@/components/navbar/navbar";
import {ReactNode} from "react";
import Footer from "@/components/footer";
import {SessionProvider} from "next-auth/react";
import {auth} from "@/auth";

export default async function LandingLayout({children}: {
    children: ReactNode
}) {
    const session = await auth()
    return (
        <html lang="en">
        <body>
        <SessionProvider session={session}>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
        </SessionProvider>
        </body>
        </html>
    )
}