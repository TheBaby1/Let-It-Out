import DisplayPosts from "../components/display/DisplayPosts";

const PostLayout = ({children}) => {

    return (
        <>
            <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-[#E3FDFD]">
                <div className="relative sm:max-w-sm w-full">
                    <DisplayPosts />
                </div>
            </div>
        </>
    );
}

export default PostLayout;