import React from 'react';
import Image from 'next/image';
import image1 from "@/public/images/1.jpg"
import image2 from "@/public/images/2.jpg"
import image3 from "@/public/images/3.jpg"
import image4 from "@/public/images/4.jpg"
import image5 from "@/public/images/5.jpg"
import image6 from "@/public/images/6.jpg"
import image7 from "@/public/images/7.jpg"
import {Button} from "@/components/ui/button";

export default function Hero() {
    return (
        <div className="relative overflow-hidden">
            <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className="sm:max-w-lg">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Summer styles are finally here
                        </h1>
                        <p className="mt-4 text-xl text-gray-500">
                            This year, our new summer collection will shelter you from the harsh elements of a world
                            that does&#39;t
                            care if you live or die.
                        </p>
                    </div>
                    <div>
                        <div className="mt-10">
                            {/* Decorative image grid */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                            >
                                <div
                                    className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:translate-x-8 lg:-translate-y-1/2">
                                    <div className="flex items-center space-x-6 lg:space-x-8">
                                        <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div
                                                className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                <Image
                                                    alt=""
                                                    loading="eager"
                                                    height={600}
                                                    width={500}
                                                    src={image1}
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <Image
                                                    alt=""
                                                    loading="eager"
                                                    height={600}
                                                    width={500}
                                                    src={image2}
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <Image
                                                    alt=""
                                                    loading="eager"
                                                    height={600}
                                                    width={500}
                                                    src={image3}
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <Image
                                                    alt=""
                                                    loading="eager"
                                                    height={600}
                                                    width={500}
                                                    src={image4}
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <Image
                                                    alt=""
                                                    loading="eager"
                                                    height={600}
                                                    width={500}
                                                    src={image5}
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <Image
                                                    alt=""
                                                    loading="eager"
                                                    height={600}
                                                    width={500}
                                                    src={image6}
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <Image
                                                    alt=""
                                                    loading="eager"
                                                    height={600}
                                                    width={500}
                                                    src={image7}
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Button size="lg">Shop Collection</Button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}