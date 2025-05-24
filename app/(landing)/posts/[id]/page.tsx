import React from 'react';
import {getPostById} from "@/lib/data/posts";
import PostDetail from "@/components/post/post-detail";

export default async function Page({params}: {params: Promise<{id: number}>}) {
    const {id} = await params;
    const post = await getPostById(id)
    return (
        <div>
            <PostDetail post={post}/>
        </div>
    );
}