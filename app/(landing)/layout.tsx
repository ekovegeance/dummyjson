import Navbar from "@/components/navbar";
import {ReactNode} from "react";
import Footer from "@/components/footer";

export default function LandingLayout({children}: {
    children: ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
        </body>
        </html>
    )
}