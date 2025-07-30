import React from 'react';
import CreatePost from '../components/create-post/CreatePost';

const HomePageLayout = ({ children }) => {

    return (
        <>
            <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-[#E3FDFD]">
                <div className="relative sm:max-w-sm w-full">
                    <CreatePost />
                </div>
            </div>
        </>
    );
}

export default HomePageLayout;