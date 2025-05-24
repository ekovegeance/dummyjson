import {User} from "@/types/user";

export interface PostsResponse {
    limit: number;
    posts: Post[];
    skip: number;
    total: number;
}

export interface Post {
    body: string;
    id: number;
    reactions: Reactions;
    tags: string[];
    title: string;
    userId: number;
    views: number;
}

export interface Reactions {
    dislikes: number;
    likes: number;
}

export interface PostWithUser extends Post{
    user: User
}