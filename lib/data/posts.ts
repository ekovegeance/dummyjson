import api from "@/lib/axios";
import type {PostsResponse, PostWithUser} from "@/types/posts";
import type {User} from "@/types/user";

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


export async function getPostsWithUser(): Promise<PostWithUser[]> {
    try {
        const response = await api.get<PostsResponse>('posts');
        const posts = response.data.posts;

        // Fetch user details for each post
        const postsWithUser = await Promise.all(
            posts.map(async (post) => {
                const userResponse = await api.get<User>(`/users/${post.userId}`);
                return { ...post, user: userResponse.data };
            })
        );

        return postsWithUser;
    } catch (error) {
        console.error(error);
        throw error;
    }
}