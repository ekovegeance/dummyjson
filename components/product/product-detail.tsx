'use client';

import {Check, ShieldCheck} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Product} from "@/types/products";
import Image from "next/image";

const reviews = {average: 4, totalCount: 1624}

// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }

export default function ProductDetail({product}: {product: Product}) {

    return (
        <div className="bg-white">
            <div
                className="mx-auto max-w-2xl px-4 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                {/* Product details */}
                <div className="lg:max-w-lg lg:self-end">

                    <div className="mt-4">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{product.title}</h1>
                    </div>

                    <section aria-labelledby="information-heading" className="mt-4">
                        <h2 id="information-heading" className="sr-only">
                            Product information
                        </h2>

                        <div className="flex items-center">
                            <p className="text-lg text-gray-900 sm:text-xl">${product.price}</p>

                            <div className="ml-4 border-l border-gray-300 pl-4">
                                <h2 className="sr-only">Reviews</h2>
                                <div className="flex items-center">
                                    <div>
                                        {/*<div className="flex items-center">*/}
                                        {/*    {[0, 1, 2, 3, 4].map((rating) => (*/}
                                        {/*        <Star*/}
                                        {/*            key={rating}*/}
                                        {/*            aria-hidden="true"*/}
                                        {/*            className={classNames(*/}
                                        {/*                reviews.average > rating ? 'text-yellow-400' : 'text-gray-300',*/}
                                        {/*                'size-5 shrink-0',*/}
                                        {/*            )}*/}
                                        {/*        />*/}
                                        {/*    ))}*/}
                                        {/*</div>*/}
                                        <p className="sr-only">{reviews.average} out of 5 stars</p>
                                    </div>
                                    <p className="ml-2 text-sm text-gray-500">{reviews.totalCount} reviews</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 space-y-6">
                            <p className="text-base text-gray-500">{product.description}</p>
                        </div>

                        <div className="mt-6 flex items-center">
                            <Check aria-hidden="true" className="size-5 shrink-0 text-green-500"/>
                            <p className="ml-2 text-sm text-gray-500">In stock and ready to ship</p>
                        </div>
                    </section>
                </div>

                {/* Product image */}
                <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
                    <Image width={500} height={500} alt={product.title} src={product.thumbnail}
                         className="aspect-square w-full rounded-lg object-cover"/>
                </div>

                {/* Product form */}
                <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
                    <section aria-labelledby="options-heading">
                        <h2 id="options-heading" className="sr-only">
                            Product options
                        </h2>

                        <form>
                            <div className="sm:flex sm:justify-between">
                                {/* Size selector */}

                            </div>
                            {/*<div className="mt-4">*/}
                            {/*    <a href="#" className="group inline-flex text-sm text-gray-500 hover:text-gray-700">*/}
                            {/*        <span>What size should I buy?</span>*/}
                            {/*        <QuestionMarkCircleIcon*/}
                            {/*            aria-hidden="true"*/}
                            {/*            className="ml-2 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"*/}
                            {/*        />*/}
                            {/*    </a>*/}
                            {/*</div>*/}
                            <div className="mt-10">
                                <Button
                                    type="submit"
                                    size="lg"
                                >
                                    Add to bag
                                </Button>
                            </div>
                            <div className="mt-6 text-center">
                                <a href="#" className="group inline-flex text-base font-medium">
                                    <ShieldCheck
                                        aria-hidden="true"
                                        className="mr-2 size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                                    />
                                    <span className="text-gray-500 hover:text-gray-700">Lifetime Guarantee</span>
                                </a>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    )
}
