import React from 'react';
import PostList from "@/components/post/post-list";
import {getPosts} from "@/lib/data/posts"

export default async function PostsPage() {
    const posts = await getPosts();
    return (
        <div>
            <PostList posts={posts} />
        </div>
    );
}