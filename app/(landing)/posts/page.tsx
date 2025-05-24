import React from 'react';
import PostList from "@/components/post/post-list";
import {getPostsWithUser} from "@/lib/data/posts"

export default async function PostsPage() {
    const posts = await getPostsWithUser();
    return (
        <div>
            <PostList posts={posts} />
        </div>
    );
}