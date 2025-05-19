import api from "@/lib/axios";
import {ProductListResponse} from "@/types/product";

export async function getProducts() {
    try {
        const response = await api.get<ProductListResponse>("/products");
        return response.data.products;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
}