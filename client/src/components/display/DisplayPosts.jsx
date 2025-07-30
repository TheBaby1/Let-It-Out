import React from 'react';
import { useState, useEffect } from 'react';
import usePosts from '../../hooks/usePosts.js';

const DisplayPosts = () => {

    const [posts, setPosts] = useState([]);

    const { getPosts } = usePosts();

    const fetchPosts = async () => {
        const posts = await getPosts();
        if (posts) {
            setPosts(posts);
        }
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div className="flex flex-col gap-6 px-6 py-6 bg-[#A6E3E9] min-h-[500px] max-h-[600px]">
            <div className="flex justify-center items-center">
                <h2 className="font-bold text-3xl text-gray-800">Let It Out</h2>
            </div>

            <div className="max-w-4xl mx-auto w-full overflow-y-auto">
                {posts && posts.length > 0 ? (
                    <ul className="space-y-4">
                        {posts.map(post => (
                            <li
                                key={post._id}
                                className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                            >
                                <div className="flex flex-col space-y-3">
                                    <div className="flex items-center space-x-2">
                                        <span className="font-semibold text-lg text-blue-600">
                                            {post.user.username}
                                        </span>
                                        <span className="text-sm text-gray-500">
                                            {new Date(post.createdAt).toLocaleDateString()}
                                        </span>
                                    </div>
                                    <p className="text-gray-700 text-base leading-relaxed">
                                        {post.content}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No posts available yet.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default DisplayPosts;