import React from "react";
import { Link } from "react-router-dom";

export const ListOfPostPage = ({ posts, heading, description, author }) => {
    console.log(author)
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <PostListHeader heading={heading} description={description} />
                {
                    author ? (
                        <div className="flex flex-col lg:flex-row lg:space-5">
                            <div className="max-w-md mx-auto lg:mx-0">
                                <div>
                                    {author.imgname ? (
                                        <img src={`${import.meta.env.VITE_API_BASE_URL}/images/${author.imgname}`} alt={author.name} className="w-28 h-auto rounded-full" />
                                    ) : (
                                        <img src={`${import.meta.env.VITE_NOTFOUND_IMAGE}`} alt={author.name} className="w-28 h-auto rounded-full" />
                                    )}
                                </div>
                            </div>
                            {/* <div className="mt-5 lg:mt-0 lg:ml-10 max-w-md">
                                <div className="flex items-center gap-2">
                                    {author.social.map((link) => (
                                        <Link to={link.link} target="_blank" rel="noreferrer">
                                            {link}
                                        </Link>
                                    ))}
                                </div>
                            </div> */}
                        </div>
                    ) : (
                        <></>
                    )
                }
                <div className="mx-auto mt-10 grid grid-cols-1 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
                    {posts.map((post) => (
                        <PostList post={post} />
                    ))}
                </div>
            </div>
        </div>
    )
}

const PostList = ({ post }) => {
    return (
        <div className="flex flex-col lg:flex-row lg:space-5">
            <div className="max-w-md mx-auto lg:mx-0">
                <Link to={"/" + post.url}>
                    <div>
                        {post.imgname ? (
                            <img src={`${import.meta.env.VITE_GET_IMAGE_URL}${post.imgname}${import.meta.env.VITE_IMAGE_VIEW_TOKEN}`} alt={post.title} className="w-full h-auto rounded-lg" />
                        ) : (
                            <img src={`${import.meta.env.VITE_NOTFOUND_IMAGE}`} alt={post.title} className="w-full h-auto rounded-lg" />
                        )}
                    </div>
                </Link>
            </div>
            <div className="mt-5 lg:mt-0 lg:ml-10 max-w-md">
                <time className="text-gray-500 mt-2">{
                    new Date(post.createdDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })
                }</time>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link to={"/" + post.url}>
                        {post.title}
                    </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                <div className="mt-5 text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                        <Link to={"/author/" + post.author}>
                            {post.author}
                        </Link>
                    </p>
                </div>
                <div className="tags mt-5">
                    {post.tags.map((tag) => (
                        <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10
                        hover:bg-blue-100 hover:text-blue-800 mr-2 cursor-pointer
                        ">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

const PostListHeader = ({
    heading,
    description,
}) => {
    return (
        <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {heading}
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
                {description}
            </p>
        </div>
    )
}