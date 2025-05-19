import React from 'react';
import Image from 'next/image';
import image1 from "@/public/images/1.jpg"
import image2 from "@/public/images/2.jpg"
import image3 from "@/public/images/3.jpg"
import Link from "next/link";
export default function Category() {
    return (
        <section aria-labelledby="category-heading" className="bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
                <div className="sm:flex sm:items-baseline sm:justify-between">
                    <h2 id="category-heading" className="text-2xl font-bold tracking-tight text-gray-900">
                        Shop by Category
                    </h2>
                    <Link href="#" className="hidden text-sm font-semibold text-primary sm:block">
                        Browse all categories
                        <span aria-hidden="true"> &rarr;</span>
                    </Link>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
                    <div className="group relative aspect-2/1 overflow-hidden rounded-lg sm:row-span-2 sm:aspect-square">
                        <Image
                            loading="eager"
                            height={600}
                            width={500}
                            alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
                            src={image1}
                            className="absolute size-full object-cover group-hover:opacity-75"
                        />
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 bg-linear-to-b from-transparent to-black opacity-50"
                        />
                        <div className="absolute inset-0 flex items-end p-6">
                            <div>
                                <h3 className="font-semibold text-white">
                                    <a href="#">
                                        <span className="absolute inset-0" />
                                        New Arrivals
                                    </a>
                                </h3>
                                <p aria-hidden="true" className="mt-1 text-sm text-white">
                                    Shop now
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="group relative aspect-2/1 overflow-hidden rounded-lg sm:aspect-auto">
                        <Image
                            loading="eager"
                            height={600}
                            width={500}
                            alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
                            src={image2}
                            className="absolute size-full object-cover group-hover:opacity-75"
                        />
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 bg-linear-to-b from-transparent to-black opacity-50"
                        />
                        <div className="absolute inset-0 flex items-end p-6">
                            <div>
                                <h3 className="font-semibold text-white">
                                    <a href="#">
                                        <span className="absolute inset-0" />
                                        Accessories
                                    </a>
                                </h3>
                                <p aria-hidden="true" className="mt-1 text-sm text-white">
                                    Shop now
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="group relative aspect-2/1 overflow-hidden rounded-lg sm:aspect-auto">
                        <Image
                            loading="eager"
                            height={600}
                            width={500}
                            alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
                            src={image3}
                            className="absolute size-full object-cover group-hover:opacity-75"
                        />
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 bg-linear-to-b from-transparent to-black opacity-50"
                        />
                        <div className="absolute inset-0 flex items-end p-6">
                            <div>
                                <h3 className="font-semibold text-white">
                                    <a href="#">
                                        <span className="absolute inset-0" />
                                        Workspace
                                    </a>
                                </h3>
                                <p aria-hidden="true" className="mt-1 text-sm text-white">
                                    Shop now
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 sm:hidden">
                    <Link href="#" className="block text-sm font-semibold text-primary">
                        Browse all categories
                        <span aria-hidden="true"> &rarr;</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}