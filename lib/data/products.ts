import api from "@/lib/axios";
import {ProductListResponse} from "@/types/products";

export async function getProducts() {
    try {
        const response = await api.get<ProductListResponse>("/products");
        return response.data.products;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
}

export async function getProductById(productId: number) {
    try {
        const response = await api.get(`/products/${productId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching product:", error);
        throw error;
    }
}