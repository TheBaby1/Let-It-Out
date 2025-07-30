import { useState } from 'react';

const usePosts = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getPosts = async () => {
        try {
            const response = await fetch('http://localhost:3001/posts/all-posts', {
                method: 'GET',
                headers: {'Content-Type' : 'application/json'},
            });

            const posts = await response.json();
            return posts;

        } catch (error) {
            console.log('could not get posts');
        }
    }

    const createPost = async (postContent) => {
        try {
            const response = await fetch('http://localhost:3001/posts/create-post', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(postContent),
            });

            const post = await response.json();
            return post;
        } catch (error) {
            console.log('could not create post');
        }
    }

    return {
        getPosts,
        createPost
    }
}

export default usePosts;