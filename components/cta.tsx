import React from 'react';
import Image from "next/image";
import image1 from "@/public/images/6.jpg"
import image2 from "@/public/images/7.jpg"
import image3 from "@/public/images/8.jpg"
import Link from "next/link";

export default function Cta() {
    return (
        <section aria-labelledby="sale-heading">
            <div className="overflow-hidden pt-32 sm:pt-14">
                <div className="bg-primary">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="relative pt-48 pb-16 sm:pb-24">
                            <div>
                                <h2 id="sale-heading" className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                                    Final Stock.
                                    <br />
                                    Up to 50% off.
                                </h2>
                                <div className="mt-6 text-base">
                                    <Link href="#" className="font-semibold text-white">
                                        Shop the sale
                                        <span aria-hidden="true"> &rarr;</span>
                                    </Link>
                                </div>
                            </div>

                            <div className="absolute -top-32 left-1/2 -translate-x-1/2 transform sm:top-6 sm:translate-x-0">
                                <div className="ml-24 flex min-w-max space-x-6 sm:ml-3 lg:space-x-8">
                                    <div className="flex space-x-6 sm:flex-col sm:space-y-6 sm:space-x-0 lg:space-y-8">
                                        <div className="shrink-0">
                                            <Image
                                                alt=""
                                                src={image3}
                                                className="size-64 rounded-lg object-cover md:size-72"
                                            />
                                        </div>

                                        <div className="mt-6 shrink-0 sm:mt-0">
                                            <Image
                                                alt=""
                                                src={image2}
                                                className="size-64 rounded-lg object-cover md:size-72"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-y-6 sm:space-x-0 lg:space-y-8">
                                        <div className="shrink-0">
                                            <Image
                                                alt=""
                                                src={image1}
                                                className="size-64 rounded-lg object-cover md:size-72"
                                            />
                                        </div>

                                        <div className="mt-6 shrink-0 sm:mt-0">
                                            <Image
                                                alt=""
                                                src={image3}
                                                className="size-64 rounded-lg object-cover md:size-72"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex space-x-6 sm:flex-col sm:space-y-6 sm:space-x-0 lg:space-y-8">
                                        <div className="shrink-0">
                                            <Image
                                                alt=""
                                                src={image2}
                                                className="size-64 rounded-lg object-cover md:size-72"
                                            />
                                        </div>

                                        <div className="mt-6 shrink-0 sm:mt-0">
                                            <Image
                                                alt=""
                                                src={image1}
                                                className="size-64 rounded-lg object-cover md:size-72"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}