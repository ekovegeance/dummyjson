'use client'

import Hero from "@/components/hero";
import Featured from "@/components/featured";
import Favorites from "@/components/favorites";
import Cta from "@/components/cta";
import Category from "@/components/category";



export default function LandingPage() {

    return (
        <div className="bg-white">
            <main>
                <Hero/>
                <Category/>
                <Featured/>
                <Favorites/>
                <Cta/>
            </main>
        </div>
    )
}
