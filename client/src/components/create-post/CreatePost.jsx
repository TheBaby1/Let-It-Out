import React from 'react';
import usePosts from '../../hooks/usePosts';
import { useState, useEffect } from 'react';

const CreatePost = () => {

    const [formData, setFormData] = useState({
        content: '',
        userId: ''
    })

    const { createPost } = usePosts();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {   
            const result = await createPost(formData);
        } catch (error) {
            console.log('failed to create post');
        }
    }

    return (
        <>
            <div className="flex flex-col gap-4 rounded-[8px] bg-gray-500 px-6 py-4">
                <div className="items-center justify-center">
                    <h2 className="text-center justify-center text-black text-3xl">
                        Create Post
                    </h2>

                    <form onSubmit={handleSubmit} className="ml-4">
                        <label>hello</label>
                        <input
                            className="h-[35px] border border-black rounded-[8px] ml-4"
                            placeholder='Enter Text'
                            type='text'
                            name='content'
                            value={formData.content}
                            onChange={handleChange}
                        >
                        </input>

                        <input
                            className="h-[35px] border border-black rounded-[8px] ml-4"
                            placeholder='Enter ID'
                            type='text'
                            name='userId'
                            value={formData.userId}
                            onChange={handleChange}
                        >
                        </input>

                        <button
                            type="submit"
                            className="w-[120px] bg-blue-500 text-white py-2 rounded-[8px] hover:bg-blue-600 transition duration-300 cursor-pointer"
                        >
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default CreatePost;