import React from 'react';
import {getProductById} from "@/lib/data/products";
import ProductDetails from "@/components/product/product-detail";
import { notFound } from 'next/navigation';


export default async function Page({params}: {params: Promise<{id: number}>}) {
    const { id } = await params;
    // Fetch product details using the id
    const product = await getProductById(id);

    if (!product) return notFound()

    return (
        <div>
            {/*Page*/}
            {/*<h1>Product ID: {id}</h1>*/}
            {/*{product.title}*/}
            {/* Add your product details component here */}
             <ProductDetails product={product} />
        </div>
    );
}