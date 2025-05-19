import React from 'react';
import Image from "next/image";
import image8 from "@/public/images/8.jpg"
import {Button} from "@/components/ui/button";

export default function Featured() {
    return (
        <section aria-labelledby="cause-heading">
            <div className="relative bg-primary px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
                <div className="absolute inset-0 overflow-hidden">
                    <Image
                        loading="eager"
                        height={600}
                        width={500}
                        alt=""
                        src={image8}
                        className="size-full object-cover"
                    />
                </div>
                <div aria-hidden="true" className="absolute inset-0 bg-gray-900/50" />
                <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                    <h2 id="cause-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Long-term thinking
                    </h2>
                    <p className="mt-3 text-xl text-white">
                        We&#39;re committed to responsible, sustainable, and ethical manufacturing. Our small-scale approach allows
                        us to focus on quality and reduce our impact. We&#39;re doing our best to delay the inevitable heat-death of
                        the universe.
                    </p>
                    <Button size="lg" variant="secondary">Read our story</Button>
                </div>
            </div>
        </section>
    );
}