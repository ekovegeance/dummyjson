import {Post} from "@/types/posts";


export default function PostDetail({post}: {post: Post}) {
    return (
        <div className="bg-white px-6 py-8 lg:px-8">
            <div className="mx-auto max-w-3xl text-base/7 text-gray-700">
                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                    {post.title}
                </h1>
                <p className="mt-6 text-xl/8">
                    {post.body}
                </p>
            </div>
        </div>
    )
}
