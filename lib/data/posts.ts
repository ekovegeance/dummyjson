import api from "@/lib/axios";
import {PostsResponse} from "@/types/posts";

export async function getPosts() {
    try {
        const response = await api.get<PostsResponse>('posts');
        return response.data.posts;

    } catch (error) {
        console.error(error)
        throw error
    }
}

export async function getPostById(postId: number) {
    try {
        const response = await api.get(`/posts/${postId}`);
        return response.data;

    }catch (error) {
        console.error(error);
        throw error
    }

}