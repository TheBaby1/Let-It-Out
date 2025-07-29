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
        <>
            <div className="flex flex-col gap-4 px-6 py-4 bg-gray ">
                <div className="justify-center items-center">
                    <h2 className="font-bold text-3xl">Posts:</h2>

                    <ul>
                        {posts && (
                            posts.map(post => (
                                <li key={post._id} className="font-medium text-2xl">
                                    {post.content}
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            </div>
        </>
    );

}

export default DisplayPosts;