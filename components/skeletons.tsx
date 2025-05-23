"use client"

import React from "react";


export  function BlogListSkeleton() {
    // Create an array of 3 items to match the grid layout
    const skeletonPosts = Array.from({ length: 3 }, (_, i) => i + 1)

    return (
        <div className="bg-white py-8">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    {/* Skeleton for heading */}
                    <div className="h-10 w-3/4 bg-gray-200 rounded animate-pulse mb-4" />
                    {/* Skeleton for subheading */}
                    <div className="h-6 w-full bg-gray-200 rounded animate-pulse" />
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {skeletonPosts.map((id) => (
                        <article key={id} className="flex max-w-xl flex-col items-start justify-between">
                            <div className="flex items-center gap-x-4">
                                {/* Skeleton for date */}
                                <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
                                {/* Skeleton for category */}
                                <div className="h-6 w-24 bg-gray-200 rounded-full animate-pulse" />
                            </div>
                            <div className="group relative w-full">
                                {/* Skeleton for title */}
                                <div className="mt-3 h-6 w-full bg-gray-200 rounded animate-pulse" />
                                {/* Skeleton for description - multiple lines */}
                                <div className="mt-5 space-y-2">
                                    <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                                    <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                                    <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse" />
                                </div>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                {/* Skeleton for author image */}
                                <div className="size-10 rounded-full bg-gray-200 animate-pulse" />
                                <div className="text-sm/6 space-y-2">
                                    {/* Skeleton for author name */}
                                    <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
                                    {/* Skeleton for author role */}
                                    <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}

export  function ProductListSkeleton() {
    return (
        <div className="bg-white animate-pulse">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {[...Array(8)].map((_, i) => (
                        <div className="group relative" key={i}>
                            <div className="aspect-square w-full rounded-md bg-gray-200 lg:aspect-auto lg:h-80"></div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export  function ProductDetailSkeleton() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 sm:px-6  lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                {/* Product details skeleton */}
                <div className="lg:max-w-lg lg:self-end">

                    {/* Product name skeleton */}
                    <div className="mt-4">
                        <div className="h-10 w-3/4 rounded bg-gray-200 animate-pulse"></div>
                    </div>

                    <section aria-labelledby="information-heading" className="mt-4">
                        <h2 id="information-heading" className="sr-only">
                            Product information
                        </h2>

                        <div className="flex items-center">
                            {/* Price skeleton */}
                            <div className="h-7 w-20 rounded bg-gray-200 animate-pulse"></div>

                            <div className="ml-4 border-l border-gray-300 pl-4">
                                {/* Reviews skeleton */}
                                <div className="flex items-center">
                                    <div>
                                        <div className="flex items-center space-x-1">
                                            {[0, 1, 2, 3, 4].map((index) => (
                                                <div key={index} className="h-5 w-5 rounded bg-gray-200 animate-pulse"></div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="ml-2 h-4 w-24 rounded bg-gray-200 animate-pulse"></div>
                                </div>
                            </div>
                        </div>

                        {/* Description skeleton */}
                        <div className="mt-4 space-y-2">
                            <div className="h-4 w-full rounded bg-gray-200 animate-pulse"></div>
                            <div className="h-4 w-full rounded bg-gray-200 animate-pulse"></div>
                            <div className="h-4 w-3/4 rounded bg-gray-200 animate-pulse"></div>
                        </div>

                        {/* In stock skeleton */}
                        <div className="mt-6 flex items-center">
                            <div className="h-5 w-5 rounded-full bg-gray-200 animate-pulse"></div>
                            <div className="ml-2 h-4 w-40 rounded bg-gray-200 animate-pulse"></div>
                        </div>
                    </section>
                </div>

                {/* Product image skeleton */}
                <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
                    <div className="aspect-square w-full rounded-lg bg-gray-200 animate-pulse"></div>
                </div>

                {/* Product form skeleton */}
                <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
                    <section aria-labelledby="options-heading">
                        <h2 id="options-heading" className="sr-only">
                            Product options
                        </h2>

                        <div>

                            {/* Size guide skeleton */}
                            <div className="mt-4">
                                <div className="inline-flex items-center">
                                    <div className="h-4 w-40 rounded bg-gray-200 animate-pulse"></div>
                                    <div className="ml-2 h-5 w-5 rounded bg-gray-200 animate-pulse"></div>
                                </div>
                            </div>

                            {/* Add to bag button skeleton */}
                            <div className="mt-10">
                                <div className="h-10 w-1/4 rounded-full bg-gray-200 animate-pulse"></div>
                            </div>

                            {/* Guarantee skeleton */}
                            <div className="mt-6 flex justify-center">
                                <div className="inline-flex items-center">
                                    <div className="h-6 w-6 rounded bg-gray-200 animate-pulse"></div>
                                    <div className="ml-2 h-5 w-36 rounded bg-gray-200 animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

