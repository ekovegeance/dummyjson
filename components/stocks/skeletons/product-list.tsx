import React from 'react';

export default function ProductListSkeleton() {
    return (
        <div className="bg-white animate-pulse">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
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
