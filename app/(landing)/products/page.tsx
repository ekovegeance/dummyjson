import ProductList from "@/components/product/product-list";
import { Product } from '@/types/products';
import { getProducts } from "@/lib/data/products";

export default async function ProductPage() {
    const products: Product[] = await getProducts();

    return (
        <div>
            <ProductList products={products} />
        </div>
    );
}