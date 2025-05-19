import React from 'react';
import {getProductById} from "@/lib/data/product";

export default async function Page({params}: {params: Promise<{id: number}>}) {
    const { id } = await params;
    // Fetch product details using the id
    const product = await getProductById(id);
    console.log("Log Detail Product",product);
    if (!product) {
        return <div>Product not found</div>;
    }
    return (
        <div>
            Page
            <h1>Product ID: {id}</h1>
            {product.title}
            {/* Add your product details component here */}
            {/* Example: <ProductDetails id={id} /> */}
        </div>
    );
}