import React from 'react';
import Link from "next/link";
import image1 from "@/public/images/6.jpg"
import image2 from "@/public/images/7.jpg"
import image3 from "@/public/images/8.jpg"
import Image from "next/image";

const favorites = [
    {
        id: 1,
        name: 'Black Basic Tee',
        price: '$32',
        href: '#',
        imageSrc: image1,
        imageAlt: "Model wearing women's black cotton crew neck tee.",
    },
    {
        id: 2,
        name: 'Off-White Basic Tee',
        price: '$32',
        href: '#',
        imageSrc: image2,
        imageAlt: "Model wearing women's off-white cotton crewneck tee.",
    },
    {
        id: 3,
        name: 'Mountains Artwork Tee',
        price: '$36',
        href: '#',
        imageSrc: image3,
        imageAlt:
            "Model wearing women's burgundy red crewneck artwork tee with small white triangle overlapping larger black triangle.",
    },
]
export default function Favorites() {
    return (
        <section aria-labelledby="favorites-heading">
            <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
                <div className="sm:flex sm:items-baseline sm:justify-between">
                    <h2 id="favorites-heading" className="text-2xl font-bold tracking-tight text-gray-900">
                        Our Favorites
                    </h2>
                    <Link href="#" className="hidden text-sm font-semibold text-primary sm:block">
                        Browse all favorites
                        <span aria-hidden="true"> &rarr;</span>
                    </Link>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8">
                    {favorites.map((favorite) => (
                        <div key={favorite.id} className="group relative">
                            <Image
                                loading="eager"
                                height={600}
                                width={500}
                                alt={favorite.imageAlt}
                                src={favorite?.imageSrc}
                                className="h-96 w-full rounded-lg object-cover group-hover:opacity-75 sm:aspect-2/3 sm:h-auto"
                            />
                            <h3 className="mt-4 text-base font-semibold text-gray-900">
                                <a href={favorite.href}>
                                    <span className="absolute inset-0" />
                                    {favorite.name}
                                </a>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">{favorite.price}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-6 sm:hidden">
                    <a href="#" className="block text-sm font-semibold text-primary">
                        Browse all favorites
                        <span aria-hidden="true"> &rarr;</span>
                    </a>
                </div>
            </div>
        </section>
    );
}