import React from 'react';
import ProductList from "@/components/product/product-list";
import { Product } from '@/types/product';
import { getProducts } from "@/lib/data/product";

export default async function ProductPage() {
    const products: Product[] = await getProducts();

    return (
        <div>
            <ProductList products={products} />
        </div>
    );
}